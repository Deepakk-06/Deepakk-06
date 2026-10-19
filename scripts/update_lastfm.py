import json
import os
import sys
import urllib.parse
import urllib.request
from html import escape

START = "<!--LASTFM:START-->"
END = "<!--LASTFM:END-->"
README = "README.md"
LIMIT = 5

user = os.environ.get("LASTFM_USER", "").strip()
key = os.environ.get("LASTFM_API_KEY", "").strip()
if not user or not key:
    sys.exit("ERROR: LASTFM_USER or LASTFM_API_KEY is empty. Check repo secrets.")

params = urllib.parse.urlencode({
    "method": "user.getrecenttracks",
    "user": user,
    "api_key": key,
    "format": "json",
    "limit": LIMIT,
})
url = "https://ws.audioscrobbler.com/2.0/?" + params

try:
    with urllib.request.urlopen(url, timeout=20) as r:
        data = json.load(r)
except Exception as e:
    sys.exit(f"ERROR: request to Last.fm failed: {e}")

if "error" in data:
    sys.exit(f"ERROR from Last.fm: {data.get('message')} (code {data['error']})")

tracks = data.get("recenttracks", {}).get("track", [])
if isinstance(tracks, dict):
    tracks = [tracks]

lines = []
for t in tracks[:LIMIT]:
    name = escape(t.get("name", "Unknown"))
    artist = escape(t.get("artist", {}).get("#text", "Unknown"))
    link = escape(t.get("url", f"https://www.last.fm/user/{user}"), quote=True)
    playing = t.get("@attr", {}).get("nowplaying") == "true"
    tag = "▶ now playing" if playing else ""
    lines.append(
        f'  <a href="{link}"><b>{name}</b></a> &nbsp;·&nbsp; {artist}'
        + (f' &nbsp;·&nbsp; <i>{tag}</i>' if tag else "")
        + "<br/>"
    )

if not lines:
    body = '<p align="center"><sub>No recent tracks found.</sub></p>'
else:
    body = '<p align="center">\n' + "\n".join(lines) + "\n</p>\n"
    body += (
        f'<p align="center"><sub><a href="https://www.last.fm/user/{escape(user)}">'
        "last.fm profile</a></sub></p>"
    )

with open(README, "r", encoding="utf-8") as f:
    text = f.read()

if START not in text or END not in text:
    sys.exit(f"ERROR: markers {START} / {END} not found in {README}")

head, rest = text.split(START, 1)
_, tail = rest.split(END, 1)
new = f"{head}{START}\n{body}\n{END}{tail}"

if new != text:
    with open(README, "w", encoding="utf-8") as f:
        f.write(new)
    print("README updated.")
else:
    print("No change.")
