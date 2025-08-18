// app/api/lead/route.ts
import { NextResponse } from 'next/server';

// Improved handler: parse urlencoded body into JSON and forward as JSON to Zapier.
export async function POST(req: Request) {
  const zapierUrl = 'https://hooks.zapier.com/hooks/catch/20742109/u67siz4/';

  try {
    // Read raw body (form is sent as application/x-www-form-urlencoded)
    const raw = await req.text();

    // Parse urlencoded into an object
    const params = new URLSearchParams(raw);
    const payload: Record<string, string> = {};
    for (const [k, v] of params.entries()) {
      payload[k] = v;
    }

    // Forward as JSON to Zapier (more reliable than forwarding raw urlencoded)
    const resp = await fetch(zapierUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => resp.statusText || '');
      console.error('Zapier webhook failed', resp.status, text);
      return NextResponse.json({ error: 'Zapier webhook returned an error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead submission failed', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
