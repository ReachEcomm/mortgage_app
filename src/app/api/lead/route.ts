// app/api/lead/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Body comes as urlencoded (from your form)
    const body = await req.text();

    const zapierUrl = 'https://hooks.zapier.com/hooks/catch/20742109/u67siz4/';

    const resp = await fetch(zapierUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!resp.ok) {
      console.error('Zapier webhook failed', resp.statusText);
      return NextResponse.json({ error: 'Zapier error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead submission failed', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
