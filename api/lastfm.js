// GET /api/lastfm -> SVG card of the latest / now-playing track (rendered fresh on every request)
const { latestTrack, itunes, artDataUri, ago, LASTFM_PLACEHOLDER } = require("./_lib");

const ACCENT = "#CE1C18"; // red. Lime from the portfolio: "#C6F432"

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const trunc = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…");

function card({ title, artist, label, art, playing }) {
  const sans = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
  const t = esc(trunc(title, 22)), a = esc(trunc(artist, 28));
  const img = art
    ? `<image href="${art}" x="14" y="14" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#r)"/>`
    : "";
  const bars = [0, 1, 2, 3]
    .map((i) => `<rect class="bar${playing ? " on" : ""}" x="${298 + i * 6}" y="16" width="3" height="12" rx="1.5" fill="${playing ? ACCENT : "#3a3a42"}" style="animation-delay:${i * 0.17}s"/>`)
    .join("");
  const pulse = playing ? `<circle class="pulse" cx="38" cy="38" r="11" fill="none" stroke="${ACCENT}" stroke-width="1.5"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="76" viewBox="0 0 340 76" role="img" aria-label="${esc(label)}: ${t} by ${a}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14141a"/><stop offset="1" stop-color="#0b0b0e"/></linearGradient>
    <clipPath id="r"><rect x="14" y="14" width="48" height="48" rx="7"/></clipPath>
  </defs>
  <style>
    .fade{animation:fi .7s ease both}
    @keyframes fi{from{opacity:0}to{opacity:1}}
    .bar{transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(.35)}
    .bar.on{animation:eq 1s ease-in-out infinite}
    @keyframes eq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}
    .pulse{transform-box:fill-box;transform-origin:center;animation:pl 1.8s ease-out infinite}
    @keyframes pl{0%{transform:scale(.8);opacity:.7}100%{transform:scale(1.8);opacity:0}}
  </style>
  <rect x="0.75" y="0.75" width="338.5" height="74.5" rx="12" fill="url(#bg)" stroke="#2b2b33" stroke-width="1.5"/>
  <g class="fade">
    <rect x="14" y="14" width="48" height="48" rx="7" fill="#1a1a21"/>
    ${img}
    <rect x="14" y="14" width="48" height="48" rx="7" fill="#000" opacity="0.38"/>
    ${pulse}
    <path d="M33 29 L33 47 L47 38 Z" fill="${ACCENT}"/>
  </g>
  <g class="fade" style="animation-delay:.1s">
    <text x="74" y="27" font-family="${sans}" font-size="9" font-weight="700" letter-spacing="1.8" fill="#8c8c94">${esc(label)}</text>
    <text x="74" y="45" font-family="${sans}" font-size="14" font-weight="700" fill="#ffffff">${t}</text>
    <text x="74" y="61" font-family="${sans}" font-size="11.5" fill="#a9a9b3">${a}</text>
    ${bars}
  </g>
</svg>`;
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  // Short cache so the image stays live but a burst of views doesn't hammer Last.fm
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=10, stale-while-revalidate=10");
  try {
    const t = await latestTrack();
    if (!t) return res.status(200).send(card({ title: "Nothing yet", artist: "No scrobbles found", label: "LAST.FM", cta: "OPEN ON LAST.FM", art: null }));
    const { art, preview } = await itunes(t.title, t.artist);
    let artUrl = art;
    if (!artUrl) artUrl = [...t.lastfmImages].reverse().find((u) => !u.includes(LASTFM_PLACEHOLDER)) || null;
    const artUri = artUrl ? await artDataUri(artUrl) : null;
    res.status(200).send(card({
      title: t.title, artist: t.artist,
      label: t.playing || !t.uts ? "NOW PLAYING" : `LAST PLAYED · ${ago(t.uts).toUpperCase()}`,
      cta: preview ? "TAP TO PLAY" : "OPEN ON LAST.FM",
      art: artUri,
      playing: t.playing,
    }));
  } catch (e) {
    res.status(200).send(card({ title: "Last.fm unavailable", artist: String(e.message).slice(0, 40), label: "ERROR", cta: "CHECK VERCEL ENV VARS", art: null }));
  }
};
