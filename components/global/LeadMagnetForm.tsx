'use client'

import { useState, FormEvent } from 'react'

// ── Types ──────────────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface LeadMagnetFormProps {
  leadMagnetSlug: string
  leadMagnetName: string
  buttonLabel?: string
}

// ── Input class — matches ContactForm.tsx pattern ──────────────────────────

const inputClass =
  'w-full px-4 py-3 rounded-md border border-silver bg-white text-navy placeholder-graphite/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors'

// ── Component ──────────────────────────────────────────────────────────────

export function LeadMagnetForm({
  leadMagnetSlug,
  leadMagnetName,
  buttonLabel = 'Download Free Checklist',
}: LeadMagnetFormProps) {
  const [status, setStatus]       = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg]   = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const firstName = (data.get('firstName') as string)?.trim()
    const email     = (data.get('email') as string)?.trim()

    // Client-side pre-validation
    if (!firstName) {
      setErrorMsg('Please enter your first name.')
      setStatus('error')
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, leadMagnetSlug }),
      })

      const json = await res.json()

      if (!res.ok) {
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setDownloadUrl(json.downloadUrl)
      setStatus('success')
    } catch {
      setErrorMsg('A network error occurred. Please try again.')
      setStatus('error')
    }
  }

  // ── Success state ────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-teal/30 bg-teal/5 p-8 text-center space-y-5">
        {/* Checkmark icon */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div>
          <p className="font-heading font-semibold text-navy text-lg">
            Your checklist is ready.
          </p>
          <p className="mt-2 text-sm text-graphite/70">
            Thank you. Click below to download your {leadMagnetName}.
          </p>
        </div>

        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-teal text-white font-heading font-semibold text-sm hover:bg-teal/90 transition-colors"
        >
          {/* Download icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" />
          </svg>
          Download {leadMagnetName}
        </a>
      </div>
    )
  }

  // ── Form state ───────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* First Name */}
      <div>
        <label htmlFor="lm-firstName" className="block text-sm font-medium text-navy mb-1.5">
          First Name <span className="text-teal" aria-hidden="true">*</span>
        </label>
        <input
          id="lm-firstName"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          placeholder="Your first name"
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="lm-email" className="block text-sm font-medium text-navy mb-1.5">
          Email Address <span className="text-teal" aria-hidden="true">*</span>
        </label>
        <input
          id="lm-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      {/* Error message */}
      {status === 'error' && errorMsg && (
        <p role="alert" className="text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3.5 rounded-md bg-teal text-white font-heading font-semibold text-sm hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Sending…' : buttonLabel}
      </button>

      {/* Privacy note */}
      <p className="text-xs text-graphite/50 text-center leading-relaxed">
        No spam. No sales emails. Just the checklist.
      </p>
    </form>
  )
}
