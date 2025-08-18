// app/api/lead/route.ts
import { NextResponse } from 'next/server';
import { forwardToZapier, basicValidate } from '@/lib/lead';

// parse urlencoded body and reuse forwarding logic in src/lib/lead
export async function POST(req: Request) {
  try {
    const raw = await req.text();
    const params = new URLSearchParams(raw);
    const payload: Record<string, string> = {};
    for (const [k, v] of params.entries()) payload[k] = v;

    // basic validation
    const errs = basicValidate(payload);
    if (errs.length) return NextResponse.json({ error: 'Missing fields', fields: errs }, { status: 400 });

    if (payload.phone) payload.phone_digits = payload.phone.replace(/\D/g, '');

    const res = await forwardToZapier(payload);
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Zapier error', zapierStatus: res.status, zapierBodySnippet: res.bodySnippet },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('Lead submission failed', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
