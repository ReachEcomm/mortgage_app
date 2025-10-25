import { NextResponse } from 'next/server';
import { forwardToZapier, basicValidate, LeadPayload } from '@/lib/lead';

const ALLOWED_ORIGINS = new Set<string>([
  'https://lighthouse-b66d3f.webflow.io',   // staging
  'https://www.lighthouselending.ca',       // production
  'http://localhost:3000',                  // local dev
  'http://127.0.0.1:3000',                  // local dev
]);

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  const headers = corsHeaders(origin);

  try {
    const incoming = (await req.json()) as Partial<LeadPayload>;

    // 🔒 Server-side validation (lightweight)
    const errors = basicValidate(incoming);
    if (errors.length) {
      return NextResponse.json(
        { ok: false, status: 400, errors },
        { status: 400, headers }
      );
    }

    // 🧩 Normalize data
    const amountNum = Number(incoming.amount);
    const payload: LeadPayload = {
      ...incoming,
      amount: isNaN(amountNum) ? 0 : amountNum,
      timestamp: incoming.timestamp || new Date().toISOString(),
      company: incoming.company || 'Lighthouse Lending',
    } as LeadPayload;

    // 🚀 Send to Zapier using your env var
    const result = await forwardToZapier(payload, { timeoutMs: 15000 });

    return NextResponse.json(
      { ok: result.ok, status: result.status },
      { status: result.ok ? 200 : 502, headers }
    );
  } catch (err: any) {
    console.error('API /lead error:', err);
    return NextResponse.json(
      { ok: false, status: 500, message: 'Internal server error' },
      { status: 500, headers }
    );
  }
}
