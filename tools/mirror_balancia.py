"""
Shallow mirror of balancia.vamtam.com for offline template reference.
Run from repo root: python tools/mirror_balancia.py
"""
from __future__ import annotations

import hashlib
import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

import requests
from bs4 import BeautifulSoup

BASE = "https://balancia.vamtam.com"
HOST = "balancia.vamtam.com"
OUT = Path(__file__).resolve().parents[1] / "external" / "balancia-vamtam-mirror"
MAX_PAGES = 60
DELAY_SEC = 0.35
SKIP_PREFIXES = (
    "/wp-admin",
    "/wp-login",
    "/feed",
    "/xmlrpc",
    "?replytocom=",
)

SESSION = requests.Session()
SESSION.headers.update(
    {
        "User-Agent": "Mozilla/5.0 (compatible; QuietEmberMirror/1.0; +https://example.local)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    }
)


def same_host(url: str) -> bool:
    try:
        return urlparse(url).netloc == HOST
    except Exception:
        return False


def should_skip(url: str) -> bool:
    try:
        p = urlparse(url)
        path = p.path or ""
        q = p.query or ""
    except Exception:
        return True
    full = path + ("?" + q if q else "")
    for s in SKIP_PREFIXES:
        if s in full or full.startswith(s.strip("?")):
            return True
    return False


def url_to_path(url: str) -> Path:
    """Map URL to relative file path under OUT (pretty permalinks -> .../index.html)."""
    p = urlparse(url)
    path = unquote((p.path or "/").rstrip("/") or "/")
    if path == "/":
        return OUT / "index.html"
    parts = [x for x in path.split("/") if x]
    if not parts:
        return OUT / "index.html"
    last = parts[-1]
    ext = Path(last).suffix.lower()
    known = {".html", ".htm", ".css", ".js", ".json", ".xml", ".txt", ".svg", ".ico"}
    if ext in known:
        return OUT / "/".join(parts)
    return OUT / "/".join(parts) / "index.html"


def asset_filename(url: str) -> str:
    p = urlparse(url)
    base = (p.path or "/").split("/")[-1] or "asset"
    if p.query:
        h = hashlib.sha256(p.query.encode()).hexdigest()[:10]
        stem = Path(base).stem
        suf = Path(base).suffix or ""
        base = f"{stem}_{h}{suf}"
    return re.sub(r"[^\w.\-]", "_", base)[:200]


def save_asset(abs_url: str) -> None | str:
    try:
        r = SESSION.get(abs_url, timeout=45)
        r.raise_for_status()
    except Exception:
        return None
    rel = f"_assets/{asset_filename(abs_url)}"
    dest = OUT / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(r.content)
    return rel


def extract_links_and_assets(soup: BeautifulSoup, page_url: str) -> tuple[set[str], set[str]]:
    urls: set[str] = set()
    assets: set[str] = set()

    for a in soup.find_all("a", href=True):
        u = urljoin(page_url, a["href"])
        if same_host(u) and not should_skip(u):
            urls.add(u.split("#")[0])

    for tag in soup.find_all(["img", "script", "source", "video"]):
        for attr in ("src", "data-src", "href"):
            v = tag.get(attr)
            if v:
                assets.add(urljoin(page_url, v.split()[0] if v else ""))

    for tag in soup.find_all("link", href=True):
        assets.add(urljoin(page_url, tag["href"]))

    for tag in soup.find_all(style=True):
        # very light url() extraction
        for m in re.findall(r"url\(([^)]+)\)", tag["style"]):
            u = m.strip().strip('"').strip("'")
            if u.startswith(("http://", "https://", "//")):
                assets.add(urljoin(page_url, u))
            elif not u.startswith("data:"):
                assets.add(urljoin(page_url, u))

    return urls, {a for a in assets if a.startswith(("http://", "https://"))}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "_assets").mkdir(exist_ok=True)

    seen: set[str] = set()
    queue: list[str] = [BASE.rstrip("/") + "/"]
    downloaded: set[str] = set()

    while queue and len(seen) < MAX_PAGES:
        url = queue.pop(0)
        if url in seen:
            continue
        if not same_host(url) or should_skip(url):
            continue
        seen.add(url)

        time.sleep(DELAY_SEC)
        try:
            r = SESSION.get(url, timeout=45)
            r.raise_for_status()
        except Exception:
            continue

        ctype = (r.headers.get("Content-Type") or "").lower()
        if "text/html" not in ctype:
            continue

        html = r.text
        soup = BeautifulSoup(html, "html.parser")

        new_urls, assets = extract_links_and_assets(soup, url)
        for u in sorted(new_urls):
            if u not in seen and u not in queue:
                queue.append(u)

        asset_map: dict[str, str] = {}
        for a in sorted(assets):
            if not same_host(a):
                continue
            if a in downloaded:
                continue
            rel = save_asset(a)
            if rel:
                downloaded.add(a)
                asset_map[a] = rel

        # Rewrite asset URLs to local paths (best-effort)
        for old, rel in asset_map.items():
            html = html.replace(old, rel.replace("\\", "/"))

        dest = url_to_path(url)
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(html, encoding="utf-8")

    print(f"Done. Pages saved under: {OUT}", flush=True)
    print(f"Unique pages fetched (cap {MAX_PAGES}): {len(seen)}", flush=True)
    print(f"Assets saved: {len(downloaded)}", flush=True)


if __name__ == "__main__":
    main()
