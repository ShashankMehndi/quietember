# Headless Screaming Frog crawl for Balancia (template / SEO export).
# Requires: Screaming Frog SEO Spider installed (CLI path below).
# Skill reference: seo-screaming-frog

$ErrorActionPreference = "Stop"

$candidates = @(
    "${env:ProgramFiles(x86)}\Screaming Frog SEO Spider\ScreamingFrogSEOSpiderCli.exe",
    "${env:ProgramFiles}\Screaming Frog SEO Spider\ScreamingFrogSEOSpiderCli.exe"
)
$Cli = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
$Url = "https://balancia.vamtam.com/"
# $PSScriptRoot = ...\quiteember\tools  →  repo root is one level up
$Root = Split-Path -Parent $PSScriptRoot
$Out = Join-Path $Root "external\balancia-screamingfrog-export"

if (-not $Cli) {
    Write-Host "Screaming Frog CLI not found. Tried:"
    $candidates | ForEach-Object { Write-Host " " $_ }
    Write-Host "Install from https://www.screamingfrog.co.uk/seo-spider/ or adjust paths in this script."
    exit 1
}
Write-Host "Using CLI:" $Cli

New-Item -ItemType Directory -Path $Out -Force | Out-Null

# Bulk export names match Screaming Frog 20.x CLI (`--help bulk-export`).
# "Web:All Page Source" is the HTML/source export (replaces older "Rendered HTML" naming).
#
# Tip: the demo site links out to many other domains; a full crawl can queue 10k+ URLs.
# In the GUI: Spider > Configuration, restrict crawl (e.g. subdomain / path / exclude external),
# then File > Configuration > Save As… and add:  --config "path\to\your.spider.config"

& $Cli `
  --crawl $Url `
  --headless `
  --export-tabs "Internal:All,Page Titles:All,Meta Description:All,H1:All,H2:All,Canonicals:All,Directives:All" `
  --bulk-export "Links:All Inlinks,Links:All Outlinks,Links:External Links,Images:All Image Inlinks,Web:All Page Source" `
  --output-folder $Out

Write-Host "Export complete:" $Out
