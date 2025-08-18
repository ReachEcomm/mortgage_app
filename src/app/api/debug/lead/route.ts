import { NextResponse } from 'next/server';
import type { LeadPayload } from '@/lib/lead';
import { forwardToZapier, basicValidate } from '@/lib/lead';

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    if (!json || typeof json !== 'object') {
      return NextResponse.json({ error: 'Expected JSON body' }, { status: 400 });
    }

    const payload = Object.entries(json).reduce((acc, [k, v]) => {
      if (v != null) acc[k] = String(v);
      return acc;
    }, {} as LeadPayload);

    const errs = basicValidate(payload);
    if (errs.length) return NextResponse.json({ error: 'Missing fields', fields: errs }, { status: 400 });

    const res = await forwardToZapier(payload);
    if (!res.ok) return NextResponse.json({ error: 'Zapier error', zapierStatus: res.status, zapierBodySnippet: res.bodySnippet }, { status: 502 });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('Debug lead submission failed', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
