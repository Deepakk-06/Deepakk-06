// GET /api/lastfm -> SVG card of the latest / now-playing track (rendered fresh on every request)
const { latestTrack, itunes, artDataUri, ago, LASTFM_PLACEHOLDER } = require("./_lib");

const ACCENT = "#CE1C18"; // red. Lime from the portfolio: "#C6F432"

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const trunc = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…");

function card({ title, artist, label, cta, art }) {
  const mono = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";
  const sans = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
  const t = esc(trunc(title, 26)), a = esc(trunc(artist, 34));
  const img = art
    ? `<image href="${art}" x="20" y="20" width="76" height="76" preserveAspectRatio="xMidYMid slice" clip-path="url(#r)"/>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="116" viewBox="0 0 460 116" role="img" aria-label="${esc(label)}: ${t} by ${a}">
  <defs><clipPath id="r"><rect x="20" y="20" width="76" height="76" rx="10"/></clipPath></defs>
  <rect x="0.5" y="0.5" width="459" height="115" rx="16" fill="#0a0a0c" stroke="#2a2a30"/>
  <rect x="20" y="20" width="76" height="76" rx="10" fill="#141418"/>
  ${img}
  <rect x="20" y="20" width="76" height="76" rx="10" fill="#000" opacity="0.38"/>
  <path d="M51 46 L51 70 L71 58 Z" fill="${ACCENT}"/>
  <text x="116" y="34" font-family="${mono}" font-size="10" letter-spacing="2" fill="#8c8c94">${esc(label)}</text>
  <text x="116" y="57" font-family="${sans}" font-size="17" font-weight="700" fill="#ffffff">${t}</text>
  <text x="116" y="76" font-family="${sans}" font-size="13" fill="#9a9aa2">${a}</text>
  <text x="116" y="95" font-family="${mono}" font-size="10" letter-spacing="1.5" fill="${ACCENT}">${esc(cta)}</text>
  <circle cx="420" cy="58" r="17" fill="none" stroke="#3a3a42"/>
  <path d="M413 65 L427 51 M418 51 L427 51 L427 60" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
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
      label: t.playing || !t.uts ? "NOW PLAYING" : `LAST PLAYED · ${ago(t.uts)}`,
      cta: preview ? "TAP TO PLAY 30S PREVIEW" : "OPEN ON LAST.FM",
      art: artUri,
    }));
  } catch (e) {
    res.status(200).send(card({ title: "Last.fm unavailable", artist: String(e.message).slice(0, 40), label: "ERROR", cta: "CHECK VERCEL ENV VARS", art: null }));
  }
};
