'use client';

import React, { useEffect, useState } from 'react';

// Main Form Component
export default function LeadFormPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    homeowner: '',
    mortgage_need: '',
    amount: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    utm_id: '',
    gclid: '',
    fbclid: '',
    referrer: '',
  });

  const THANKYOU_DELAY_MS = 1000;

  // ----------------------------------------------------------
  // UTM Tracking
  // ----------------------------------------------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = document.referrer || '';
    setFormData(prev => ({
      ...prev,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      utm_id: params.get('utm_id') || '',
      gclid: params.get('gclid') || '',
      fbclid: params.get('fbclid') || '',
      referrer: ref,
    }));
  }, []);

  // ----------------------------------------------------------
  // Field Handlers
  // ----------------------------------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNeedSelect = (value: string) => {
    setFormData(prev => ({ ...prev, mortgage_need: value }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 15);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  // ----------------------------------------------------------
  // Validation Helpers
  // ----------------------------------------------------------
  const validateStep1 = () => {
    if (!formData.homeowner) return false;
    if (!formData.mortgage_need) return false;
    if (!formData.amount || Number(formData.amount.replace(/[^\d]/g, '')) < 1000)
      return false;
    return true;
  };

  const validateStep2 = () => {
    if (!formData.first_name || !formData.last_name) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) return false;
    return true;
  };

  // ----------------------------------------------------------
  // Submit Logic
  // ----------------------------------------------------------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validateStep2()) {
      setError('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);

    const payload = {
      ...formData,
      company: 'Lighthouse Lending',
      amount: Number(formData.amount.replace(/[^\d]/g, '')),
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Network response not ok');

      setSubmitting(false);
      setThankYou(true);
      setTimeout(() => {
        window.location.assign('/thank-you-page');
      }, THANKYOU_DELAY_MS);
    } catch (err: any) {
      console.error(err);
      setSubmitting(false);
      setError('There was a problem submitting the form.');
    }
  }

  // ----------------------------------------------------------
  // Step Transitions
  // ----------------------------------------------------------
  if (thankYou) {
    return (
      <div className="card p-8 text-center">
        <div className="brand-check">✓</div>
        <h3 className="title">Thanks! We’ve received your details.</h3>
        <p className="subtitle">
          A mortgage specialist from Lighthouse Lending will be in touch shortly.
        </p>
      </div>
    );
  }

  // ----------------------------------------------------------
  // UI Rendering
  // ----------------------------------------------------------
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8" style={{ color: 'var(--brand-navy)' }}>
        Secure Your Approval
      </h1>

      {/* Progress Bar */}
      <div className="mx-auto max-w-3xl mb-8">
        <div className="stepper" aria-label="Form progress">
          <div className="step-line" aria-hidden="true"></div>
          <div
            id="stepLineFill"
            className="step-line-fill"
            style={{ width: step === 1 ? '50%' : '100%' }}
          ></div>
          <div className={`step ${step === 1 ? 'active' : ''}`}><div className="circle">1</div><div className="label">Step 1</div></div>
          <div className={`step ${step === 2 ? 'active' : ''}`}><div className="circle">2</div><div className="label">Step 2</div></div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {step === 1 && (
          <div id="step1" className="card p-6 sm:p-8 space-y-6">
            <fieldset>
              <legend className="text-base font-semibold" style={{ color: 'var(--brand-navy)' }}>
                Are you a homeowner in Ontario? <span className="text-red-600">*</span>
              </legend>
              <div className="flex flex-wrap gap-6 mt-2" role="radiogroup">
                {['Yes', 'No'].map(opt => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="homeowner"
                      value={opt}
                      checked={formData.homeowner === opt}
                      onChange={handleChange}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-base font-semibold" style={{ color: 'var(--brand-navy)' }}>
                What do you need help with most right now? <span className="text-red-600">*</span>
              </legend>
              <div id="needGroup" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Consolidate Debt',
                  'Home Equity Line of Credit',
                  'Home Equity Loan',
                  'Refinance',
                  'Renewal',
                  'Reverse Mortgage',
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleNeedSelect(option)}
                    className={`card-radio ${formData.mortgage_need === option ? 'selected' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="text-base font-semibold" style={{ color: 'var(--brand-navy)' }}>
                What’s the amount you have in mind? <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                placeholder="e.g., 50,000"
                onChange={handleChange}
                className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-4 ring-blue-100"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="brand-btn-primary"
                onClick={() => (validateStep1() ? setStep(2) : setError('Please complete all required fields.'))}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div id="step2" className="card p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="first_name" placeholder="John" onChange={handleChange} className="rounded-2xl border px-4 py-3" />
              <input name="last_name" placeholder="Doe" onChange={handleChange} className="rounded-2xl border px-4 py-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="email" placeholder="johndoe@email.com" onChange={handleChange} className="rounded-2xl border px-4 py-3" />
              <input name="phone" placeholder="123-456-7890" value={formData.phone} onChange={handlePhoneChange} className="rounded-2xl border px-4 py-3" />
            </div>

            <div className="flex items-center justify-between">
              <button type="button" className="brand-btn-secondary" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button type="submit" className="brand-btn-primary" disabled={submitting}>
                {submitting ? 'Sending…' : 'Submit'}
              </button>
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>
        )}
      </form>
    </main>
  );
}
