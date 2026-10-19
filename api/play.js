// GET /api/play -> redirects to the 30s preview of the current track (or its Last.fm page)
const { latestTrack, itunes } = require("./_lib");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    const t = await latestTrack();
    if (!t) return res.redirect(302, "https://www.last.fm");
    const { preview } = await itunes(t.title, t.artist);
    return res.redirect(302, preview || t.url);
  } catch (e) {
    return res.redirect(302, "https://www.last.fm");
  }
};
