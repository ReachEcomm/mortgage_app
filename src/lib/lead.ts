export type LeadPayload = {
  company: string;
  homeowner: string;
  mortgage_need: string;
  amount: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  timestamp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  [key: string]: any;
};

const ZAPIER_URL = process.env.ZAPIER_WEBHOOK_URL;

if (!ZAPIER_URL) {
  throw new Error('Missing required environment variable: ZAPIER_WEBHOOK_URL');
}

export function basicValidate(payload: Partial<LeadPayload>): string[] {
  const errors: string[] = [];
  if (!payload.email) errors.push('email');
  if (!payload.timestamp) errors.push('timestamp');
  if (!payload.company) errors.push('company');
  return errors;
}

export async function forwardToZapier(
  payload: LeadPayload,
  opts: { timeoutMs?: number } = {}
) {
  const timeoutMs = Math.max(1000, Math.min(30000, opts.timeoutMs ?? 15000));
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const resp = await fetch(ZAPIER_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
      cache: 'no-store',
    });

    clearTimeout(t);
    const text = await resp.text().catch(() => '');
    return {
      ok: resp.ok,
      status: resp.status,
      bodySnippet: (text || '').slice(0, 2000),
    };
  } catch (err: any) {
    clearTimeout(t);
    return { ok: false, status: 0, bodySnippet: String(err) };
  }
}
