import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

USER = os.environ.get("LASTFM_USER", "")
KEY = os.environ.get("LASTFM_API_KEY", "")
LIMIT = 5
README = "README.md"
START = "<!--LASTFM:START-->"
END = "<!--LASTFM:END-->"
PLACEHOLDER_ART = "2a96cbd8b46e442fc41c2b86b821562f"  # Last.fm's default grey star image


def fetch():
    query = urllib.parse.urlencode({
        "method": "user.getrecenttracks",
        "user": USER,
        "api_key": KEY,
        "format": "json",
        "limit": LIMIT,
    })
    req = urllib.request.Request(
        "https://ws.audioscrobbler.com/2.0/?" + query,
        headers={"User-Agent": "profile-readme-updater"},
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.load(resp)


def ago(uts):
    seconds = max(0, int(time.time()) - int(uts))
    if seconds < 3600:
        return f"{max(1, seconds // 60)} min ago"
    if seconds < 86400:
        return f"{seconds // 3600} h ago"
    return f"{seconds // 86400} d ago"


def cover(track):
    images = track.get("image") or []
    url = ""
    for img in images:
        if img.get("size") in ("large", "extralarge") and img.get("#text"):
            url = img["#text"]
            break
    if not url or PLACEHOLDER_ART in url:
        return ""
    return url


def render(data):
    tracks = data.get("recenttracks", {}).get("track", [])
    if isinstance(tracks, dict):
        tracks = [tracks]
    rows = []
    for t in tracks[:LIMIT]:
        name = html.escape(t.get("name", ""))
        artist = html.escape((t.get("artist") or {}).get("#text", ""))
        link = html.escape(t.get("url", "#"), quote=True)
        playing = (t.get("@attr") or {}).get("nowplaying") == "true"
        when = "Now playing" if playing else ago((t.get("date") or {}).get("uts", time.time()))
        art = cover(t)
        img = (
            f'<img src="{html.escape(art, quote=True)}" width="48" height="48" alt="" />'
            if art
            else "&#9835;"
        )
        rows.append(
            "  <tr>\n"
            f'    <td width="64" align="center">{img}</td>\n'
            f'    <td><b><a href="{link}">{name}</a></b><br/>{artist}<br/><sub>{when}</sub></td>\n'
            "  </tr>"
        )
    if not rows:
        return "<sub>No recent tracks.</sub>"
    return '<table align="center">\n' + "\n".join(rows) + "\n</table>\n\n<p align=\"center\"><sub>Updated automatically from Last.fm</sub></p>"


def inject(text, block):
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.DOTALL)
    if not pattern.search(text):
        sys.exit("Markers not found in README.md")
    return pattern.sub(lambda m: f"{START}\n{block}\n{END}", text)


def main():
    if not USER or not KEY:
        sys.exit("Set LASTFM_USER and LASTFM_API_KEY")
    block = render(fetch())
    with open(README, encoding="utf-8") as f:
        old = f.read()
    new = inject(old, block)
    if new != old:
        with open(README, "w", encoding="utf-8") as f:
            f.write(new)
        print("README updated")
    else:
        print("No change")


if __name__ == "__main__":
    main()
