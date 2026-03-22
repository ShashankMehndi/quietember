import os
import re
import time
from mimetypes import guess_extension
from urllib.parse import urljoin, urlparse

from playwright.sync_api import sync_playwright

URL = "https://balancia.vamtam.com/"
SAVE_DIR = os.path.join(os.path.dirname(__file__), "balancia_media")
SCROLL_PAUSE_SEC = 2
MAX_SCROLL_ROUNDS = 50

os.makedirs(SAVE_DIR, exist_ok=True)


def scroll_page(page):
    last_height = page.evaluate("document.body.scrollHeight")
    for _ in range(MAX_SCROLL_ROUNDS):
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(SCROLL_PAUSE_SEC)
        new_height = page.evaluate("document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height


def _pick_largest_from_srcset(srcset):
    if not srcset:
        return None
    best_url, best_w = None, -1
    for item in srcset.split(","):
        item = item.strip()
        if not item:
            continue
        tokens = item.split()
        u = tokens[0]
        w = -1
        if len(tokens) > 1 and tokens[1].endswith("w"):
            try:
                w = int(tokens[1][:-1])
            except ValueError:
                pass
        if w > best_w:
            best_w, best_url = w, u
    return best_url


def collect_media_urls(page):
    base = page.url
    urls = set()

    for img in page.query_selector_all("img"):
        for attr in ("src", "data-src", "data-lazy-src"):
            v = img.get_attribute(attr)
            if v and not v.startswith("data:"):
                urls.add(urljoin(base, v))
        srcset = img.get_attribute("srcset")
        picked = _pick_largest_from_srcset(srcset)
        if picked and not picked.startswith("data:"):
            urls.add(urljoin(base, picked))

    for vid in page.query_selector_all("video"):
        for attr in ("src", "poster"):
            v = vid.get_attribute(attr)
            if v and not v.startswith("data:"):
                urls.add(urljoin(base, v))
        for src_el in vid.query_selector_all("source"):
            v = src_el.get_attribute("src")
            if v and not v.startswith("data:"):
                urls.add(urljoin(base, v))

    return urls


def _ext_from_content_type(ct):
    if not ct:
        return None
    ct = ct.split(";")[0].strip().lower()
    ext = guess_extension(ct, strict=False)
    if ext == ".jpe":
        return ".jpg"
    return ext


def _safe_filename(url, index, ext):
    path = urlparse(url).path
    name = os.path.basename(path) or f"asset_{index}"
    name = re.sub(r'[<>:"/\\|?*]', "_", name)
    if ext and not name.lower().endswith(ext.lower()):
        if "." in name:
            name = os.path.splitext(name)[0] + ext
        else:
            name = name + ext
    return name


def download_urls(page, urls):
    request = page.request
    for i, url in enumerate(sorted(urls)):
        try:
            resp = request.get(url, timeout=60_000)
            if not resp.ok:
                print(f"SKIP HTTP {resp.status}: {url}")
                continue
            body = resp.body()
            ext = _ext_from_content_type(resp.headers.get("content-type"))
            if not ext:
                ext = os.path.splitext(urlparse(url).path)[1] or ".bin"
            filename = _safe_filename(url, i, ext)
            dest = os.path.join(SAVE_DIR, filename)
            base_path, ext_part = os.path.splitext(dest)
            n = 1
            while os.path.exists(dest):
                dest = f"{base_path}_{n}{ext_part}"
                n += 1
            with open(dest, "wb") as f:
                f.write(body)
            print(f"Saved: {dest}")
        except Exception as e:
            print(f"Failed {url!r}: {e}")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(
            viewport={"width": 1440, "height": 900},
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/122.0.0.0 Safari/537.36"
            ),
        )
        print(f"Loading {URL} ...")
        page.goto(URL, wait_until="networkidle", timeout=60_000)
        time.sleep(2)
        print("Scrolling page to trigger lazy-load ...")
        scroll_page(page)
        found = collect_media_urls(page)
        print(f"\nFound {len(found)} unique media URLs. Downloading ...\n")
        download_urls(page, found)
        browser.close()
    print(f"\nDone. Files saved to: {SAVE_DIR}")


if __name__ == "__main__":
    main()
