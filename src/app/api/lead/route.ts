// app/api/lead/route.ts
// Node runtime (default). Forwards form data to Zapier using a secret env var.

export const dynamic = 'force-dynamic'; // don't cache
export const revalidate = 0;

export async function POST(req: Request) {
  const zapierUrl = process.env.ZAPIER_HOOK_URL;
  if (!zapierUrl) {
    return new Response('Missing ZAPIER_HOOK_URL', { status: 500 });
  }

  // Keep incoming body exactly as-is so Zapier receives the same payload
  const contentType =
    req.headers.get('content-type') || 'application/x-www-form-urlencoded';
  const rawBody = await req.text();

  const forward = await fetch(zapierUrl, {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: rawBody,
  });

  // Tiny HTML response works for both fetch() and iframe targets
  return new Response('<!doctype html><title>ok</title>OK', {
    status: forward.ok ? 200 : 502,
    headers: { 'Content-Type': 'text/html' },
  });
}

export function GET() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: 'POST' },
  });
}
