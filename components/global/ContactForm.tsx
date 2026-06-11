'use client'

import { useState, FormEvent } from 'react'

/* ─────────────────────────────────────────────
   ContactForm — client component
   Handles submission state, POST to /api/contact,
   and inline success / error feedback.
   ───────────────────────────────────────────── */

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      name:     formData.get('name')     as string,
      business: formData.get('business') as string,
      email:    formData.get('email')    as string,
      reason:   formData.get('reason')   as string,
      message:  formData.get('message')  as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMessage('Could not reach the server. Please check your connection and try again.')
      setStatus('error')
    }
  }

  // ── Success state ─────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="bg-cloud rounded-lg p-6 md:p-8 border border-silver flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-5">
          <svg
            className="w-5 h-5 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading font-semibold text-navy text-lg mb-2">Message received</p>
        <p className="text-sm text-graphite/70 leading-relaxed max-w-[280px]">
          Beth will read your message personally and respond within 1–2 business days.
        </p>
      </div>
    )
  }

  // ── Form state ────────────────────────────────────────
  return (
    <div
      id="contact-form"
      className="bg-cloud rounded-lg p-6 md:p-8 border border-silver"
    >
      <p className="font-heading font-semibold text-navy text-base mb-5">
        Send a message
      </p>
      <form
        className="space-y-5"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-heading font-semibold text-navy mb-1.5"
          >
            Name <span className="text-teal" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            className="w-full px-4 py-3 rounded-md border border-silver bg-white text-navy placeholder-graphite/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
          />
        </div>

        {/* Business name */}
        <div>
          <label
            htmlFor="contact-business"
            className="block text-sm font-heading font-semibold text-navy mb-1.5"
          >
            Business name <span className="text-teal" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            required
            autoComplete="organization"
            placeholder="Your business name"
            className="w-full px-4 py-3 rounded-md border border-silver bg-white text-navy placeholder-graphite/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-heading font-semibold text-navy mb-1.5"
          >
            Email address <span className="text-teal" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            className="w-full px-4 py-3 rounded-md border border-silver bg-white text-navy placeholder-graphite/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
          />
        </div>

        {/* Reason dropdown */}
        <div>
          <label
            htmlFor="contact-reason"
            className="block text-sm font-heading font-semibold text-navy mb-1.5"
          >
            What brings you here? <span className="text-teal" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-reason"
            name="reason"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-silver bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors appearance-none"
          >
            <option value="" disabled>
              Select a reason…
            </option>
            <option value="ai-visibility-audit">AI Visibility Audit</option>
            <option value="ai-strategy">AI Strategy</option>
            <option value="ai-implementation">AI Implementation</option>
            <option value="speaking-inquiry">Speaking Inquiry</option>
            <option value="general-question">General Question</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-heading font-semibold text-navy mb-1.5"
          >
            Tell me about your business and what you&#39;re hoping to address
            <span className="ml-1 text-xs text-graphite/50 font-normal">(optional)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="A sentence or two about your business and what prompted you to reach out is all you need. You don't have to have everything figured out — just share what's on your mind."
            className="w-full px-4 py-3 rounded-md border border-silver bg-white text-navy placeholder-graphite/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors resize-y"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>

        {/* Inline error */}
        {status === 'error' && errorMessage && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {errorMessage}
          </p>
        )}

        <p className="text-xs text-graphite/50 text-center leading-relaxed">
          I review every inquiry personally and respond within 1–2 business days.
          No automated sequences. No obligation.
        </p>
      </form>
    </div>
  )
}
