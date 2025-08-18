// Server-only proxy: keeps your Zapier URL hidden.
// Accepts standard form posts (application/x-www-form-urlencoded or multipart) and JSON.

export const runtime = 'edge'; // optional; works great on Webflow Cloud/Edge

export async function POST(req: Request) {
  const zapierUrl = process.env.ZAPIER_HOOK_URL;
  if (!zapierUrl) {
    return new Response('Missing ZAPIER_HOOK_URL', { status: 500 });
  }

  // Preserve the incoming body exactly so Zapier receives the same keys/values
  const contentType =
    req.headers.get('content-type') || 'application/x-www-form-urlencoded';
  const rawBody = await req.text();

  const forward = await fetch(zapierUrl, {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: rawBody,
  });

  // Return tiny HTML so <iframe target> or fetch handlers can treat it as success
  const ok = forward.ok ? 200 : 502;
  return new Response('<!doctype html><title>ok</title>OK', {
    status: ok,
    headers: { 'Content-Type': 'text/html' },
  });
}

export function GET() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: 'POST' },
  });
}
