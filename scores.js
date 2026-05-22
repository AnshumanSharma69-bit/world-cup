/**
 * /api/scores.js  —  Vercel Serverless Function
 *
 * Proxies ESPN's unofficial soccer scoreboard API to bypass CORS.
 * Your frontend calls  /api/scores?dates=20260611
 * This function fetches from ESPN server-side and returns the data.
 *
 * FREE on Vercel — no credit card, no config needed.
 * Deployed automatically when you push to Vercel.
 */

const ESPN_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

export default async function handler(req, res) {
  // ── CORS headers ── allow your Vercel domain + localhost dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only GET allowed
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { dates, limit = '50' } = req.query;

    // Build ESPN URL — pass through dates & limit params
    const params = new URLSearchParams({ limit });
    if (dates) params.set('dates', dates);

    const url = `${ESPN_BASE}?${params}`;

    const espnRes = await fetch(url, {
      headers: {
        // Spoof a browser User-Agent so ESPN doesn't block the server request
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.espn.com/',
        'Origin': 'https://www.espn.com',
      },
    });

    if (!espnRes.ok) {
      return res.status(espnRes.status).json({
        error: `ESPN returned ${espnRes.status}`,
        source: url,
      });
    }

    const data = await espnRes.json();

    // Cache for 20 seconds when matches are live, 5 min otherwise
    const hasLive = (data.events || []).some(
      e => e.status?.type?.state === 'in'
    );
    const maxAge = hasLive ? 20 : 300;
    res.setHeader('Cache-Control', `public, s-maxage=${maxAge}, stale-while-revalidate=10`);
    res.setHeader('X-Cache-Max-Age', String(maxAge));
    res.setHeader('X-Has-Live', String(hasLive));

    return res.status(200).json(data);

  } catch (err) {
    console.error('[/api/scores] fetch error:', err.message);
    return res.status(500).json({ error: 'Proxy fetch failed', detail: err.message });
  }
}
