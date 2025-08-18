// src/lib/lead.ts
export type LeadPayload = Record<string, string>;

const ZAPIER_URL = 'https://hooks.zapier.com/hooks/catch/20742109/u67siz4/';

export async function forwardToZapier(payload: LeadPayload) {
  // Send JSON to Zapier webhook and return a friendly result object
  try {
    const resp = await fetch(ZAPIER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text().catch(() => '');
    const snippet = (text || '').slice(0, 2000);

    return {
      ok: resp.ok,
      status: resp.status,
      bodySnippet: snippet,
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      bodySnippet: String(err),
    };
  }
}

export function basicValidate(payload: LeadPayload) {
  const errors: string[] = [];
  if (!payload.email) errors.push('email');
  if (!payload.timestamp) errors.push('timestamp');
  return errors;
}
