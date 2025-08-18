'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export default function Page() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'ok' | 'err'; msg?: string }>({ type: 'idle' });

  // refs to fields we need to compose
  const formRef = useRef<HTMLFormElement>(null);
  const amountDisplayRef = useRef<HTMLInputElement>(null);
  const amountHiddenRef = useRef<HTMLInputElement>(null);
  const tsRef = useRef<HTMLInputElement>(null);
  const phoneFullRef = useRef<HTMLInputElement>(null);

  // Helpers
  const pills = useMemo(() => [1, 2], []);

  const formatWithCommas = (value: string) => {
    if (!value) return '';
    const parts = value.replace(/[^0-9.]/g, '').split('.');
    const intPart = (parts[0] || '').replace(/^0+(?=\d)/, '');
    const decPart = parts[1] ? parts[1].slice(0, 2) : undefined; // up to 2 decimals
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas;
  };

  const syncAmount = () => {
    const el = amountDisplayRef.current!;
    const hidden = amountHiddenRef.current!;
    const start = el.selectionStart ?? el.value.length;
    const prev = el.value;
    const formatted = formatWithCommas(prev);
    el.value = formatted;
    hidden.value = formatted.replace(/,/g, '');
    const diff = formatted.length - prev.length;
    const pos = Math.max(0, start + diff);
    requestAnimationFrame(() => el.setSelectionRange(pos, pos));
  };

  const normalizeAmountOnBlur = () => {
    const hidden = amountHiddenRef.current!;
    const el = amountDisplayRef.current!;
    const v = hidden.value;
    if (v) {
      const fixed = Number(v).toFixed(2);
      const [i, d] = fixed.split('.');
      el.value = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + d;
      hidden.value = fixed;
    }
  };

  const validateStep1 = () => {
    const form = formRef.current!;
    const hasHome = !!(form.querySelector('input[name="homeowner_ontario"]:checked') as HTMLInputElement | null);
    const hasNeed = !!(form.querySelector('input[name="need_help"]:checked') as HTMLInputElement | null);
    const amt = amountHiddenRef.current!.value.trim();
    return hasHome && hasNeed && amt !== '' && !isNaN(Number(amt));
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setStatus({ type: 'idle' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStatus({ type: 'err', msg: 'Please complete all required fields on Step 1.' });
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current!;
    // compose phone
    const a = (form.elements.namedItem('phone_area') as HTMLInputElement).value.replace(/\D/g, '');
    const b = (form.elements.namedItem('phone_prefix') as HTMLInputElement).value.replace(/\D/g, '');
    const c = (form.elements.namedItem('phone_line') as HTMLInputElement).value.replace(/\D/g, '');
    phoneFullRef.current!.value = a && b && c ? `(${a}) ${b}-${c}` : '';

    if (!form.checkValidity() || !validateStep1()) {
      setStatus({ type: 'err', msg: 'Please fill all required contact details.' });
      return;
    }

    if (tsRef.current) tsRef.current.value = new Date().toISOString();

    setSubmitting(true);
    setStatus({ type: 'idle' });

    try {
      // POST as URL-encoded to match your current webhook expectations
      const data = new FormData(form);
      const urlEncoded = new URLSearchParams();
      data.forEach((v, k) => urlEncoded.append(k, String(v)));

      const resp = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncoded.toString(),
      });

      if (!resp.ok) throw new Error('Bad response');

      setStatus({ type: 'ok', msg: '✅ Thanks! Your request was sent.' });
      form.reset();
      if (amountHiddenRef.current) amountHiddenRef.current.value = '';
      setStep(1);
    } catch {
      setStatus({ type: 'err', msg: 'There was a problem sending your request. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (tsRef.current) tsRef.current.value = new Date().toISOString();
  }, []);

  return (
    <div className="wrap">
      <h1>Secure Your Approval</h1>

      <div className="progress" id="progress">
        {pills.map((p) => (
          <span key={p} className={`pill ${step === p ? 'active' : ''}`} data-step={p}>
            {p}
          </span>
        ))}
        <span className="chev" aria-hidden="true" />
      </div>

      <form id="leadForm" className="card grid" acceptCharset="UTF-8" noValidate ref={formRef} onSubmit={handleSubmit}>
        {/* Step 1 */}
        <section id="step1" className="grid" style={{ display: step === 1 ? 'grid' : 'none' }} aria-labelledby="s1-title">
          <div className="row">
            <label id="s1-title">
              Are you a homeowner in Ontario? <span className="error">*</span>
            </label>
            <div className="choices">
              <label className="radio-card">
                <input type="radio" name="homeowner_ontario" value="Yes" required /> <span>Yes - check my options!</span>
              </label>
              <label className="radio-card">
                <input type="radio" name="homeowner_ontario" value="No" required /> <span>No</span>
              </label>
            </div>
          </div>

          <div className="row">
            <label>
              What do you need help with most right now? <span className="error">*</span>
            </label>
            <div className="choices">
              {[
                'Consolidate Debt',
                'Home Equity Line of Credit',
                'Home Equity Loan',
                'Refinance',
                'Renewal',
                'Reverse Mortgage',
              ].map((opt) => (
                <label className="radio-card" key={opt}>
                  <input type="radio" name="need_help" value={opt} required /> <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="row">
            <label>
              What&apos;s the amount you have in mind? <span className="error">*</span>
            </label>
            <span className="hint">An estimate is fine — we’ll work out the details together</span>
            <div className="money">
              <span className="prefix">$</span>
              <input
                ref={amountDisplayRef}
                type="text"
                name="amount_display"
                placeholder="0"
                inputMode="decimal"
                autoComplete="off"
                required
                onInput={syncAmount}
                onBlur={normalizeAmountOnBlur}
              />
              <input ref={amountHiddenRef} type="hidden" name="amount" />
            </div>
          </div>

          <div className="actions">
            <button type="button" id="nextBtn" onClick={handleNext}>
              Next
            </button>
          </div>
        </section>

        {/* Step 2 */}
        <section id="step2" className="grid" style={{ display: step === 2 ? 'grid' : 'none' }} aria-labelledby="s2-title">
          <div className="row">
            <label id="s2-title">
              Name <span className="error">*</span>
            </label>
            <div className="inline">
              <input type="text" name="first_name" placeholder="John" required />
              <input type="text" name="last_name" placeholder="MacDonald" required />
            </div>
          </div>

          <div className="row">
            <label>
              Email <span className="error">*</span>
            </label>
            <input type="email" name="email" placeholder="home@owner.ca" required />
            <span className="hint">Provide an email address you check frequently.</span>
          </div>

          <div className="row">
            <label>
              Phone <span className="error">*</span>
            </label>
            <span className="hint">Enter the best number to reach you.</span>
            <div className="inline three">
              <input type="text" name="phone_area" maxLength={3} placeholder="###" required />
              <input type="text" name="phone_prefix" maxLength={3} placeholder="###" required />
              <input type="text" name="phone_line" maxLength={4} placeholder="####" required />
            </div>
            <button className="secondary" type="button" tabIndex={-1}>
              Include area code
            </button>
          </div>

          {/* Hidden composites & metadata */}
          <input type="hidden" name="phone" id="phone_full" ref={phoneFullRef} />
          <input type="hidden" name="submitted_via" value="multi_step_contact" />
          <input type="hidden" name="timestamp" id="ts" ref={tsRef} />

          <div className="actions">
            <button type="button" className="secondary" id="backBtn" onClick={handleBack}>
              Back
            </button>
            <button type="submit" id="submitBtn" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit'}
            </button>
          </div>
        </section>

        <p id="status" aria-live="polite" className={status.type === 'err' ? 'error' : status.type === 'ok' ? 'success' : ''}>
          {status.msg}
        </p>
      </form>
    </div>
  );
}
