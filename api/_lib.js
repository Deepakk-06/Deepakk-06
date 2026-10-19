// Shared helpers for the Last.fm endpoints (files starting with _ are not routes on Vercel).
const LASTFM_PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f"; // Last.fm's grey star image

const fetchT = (url, ms = 6000) =>
  fetch(url, { signal: AbortSignal.timeout(ms), headers: { "User-Agent": "profile-readme-lastfm/1.0" } });

async function latestTrack() {
  const user = process.env.LASTFM_USER;
  const key = process.env.LASTFM_API_KEY;
  if (!user || !key) throw new Error("LASTFM_USER / LASTFM_API_KEY not set in Vercel");
  const q = new URLSearchParams({
    method: "user.getrecenttracks", user, api_key: key, format: "json", limit: "1",
  });
  const r = await fetchT("https://ws.audioscrobbler.com/2.0/?" + q);
  const data = await r.json();
  if (data.error) throw new Error(`Last.fm: ${data.message}`);
  let t = data.recenttracks && data.recenttracks.track;
  if (Array.isArray(t)) t = t[0];
  if (!t) return null;
  return {
    title: t.name || "Unknown",
    artist: (t.artist && t.artist["#text"]) || "Unknown",
    url: t.url || `https://www.last.fm/user/${user}`,
    playing: !!(t["@attr"] && t["@attr"].nowplaying === "true"),
    uts: t.date && t.date.uts ? Number(t.date.uts) : null,
    lastfmImages: (t.image || []).map((i) => i["#text"]).filter(Boolean),
    profile: `https://www.last.fm/user/${user}`,
  };
}

async function itunes(title, artist) {
  try {
    const q = new URLSearchParams({ term: `${artist} ${title}`, entity: "song", limit: "5" });
    const r = await fetchT("https://itunes.apple.com/search?" + q);
    const { results = [] } = await r.json();
    const first = (artist.toLowerCase().split(" ")[0]) || "";
    const hit = results.find((x) => first && (x.artistName || "").toLowerCase().includes(first));
    if (hit) return { art: (hit.artworkUrl100 || "").replace("100x100", "200x200") || null, preview: hit.previewUrl || null };
  } catch (e) { /* fall through */ }
  return { art: null, preview: null };
}

async function artDataUri(url) {
  try {
    const r = await fetchT(url);
    const buf = Buffer.from(await r.arrayBuffer());
    const mime = url.toLowerCase().includes(".png") ? "image/png" : "image/jpeg";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch (e) { return null; }
}

function ago(uts) {
  const s = Math.max(0, Math.floor(Date.now() / 1000) - uts);
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

module.exports = { latestTrack, itunes, artDataUri, ago, LASTFM_PLACEHOLDER };
