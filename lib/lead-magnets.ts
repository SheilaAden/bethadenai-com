/**
 * Lead Magnet Registry
 *
 * Add new lead magnets here. Each entry maps a URL slug to its config.
 * The slug is used in the API route and form component to look up
 * the correct download path and email notification details.
 *
 * Future products to add:
 *   - 'ai-visibility-quick-start-kit'
 *   - 'ai-visibility-audit-prep-kit'
 */

export interface LeadMagnet {
  /** URL slug — matches /resources/[slug] and the API leadMagnetSlug param */
  slug: string
  /** Human-readable name used in email notifications and thank-you messages */
  name: string
  /** Path relative to /public — served as a static asset */
  downloadPath: string
  /** Source page stored in Supabase for analytics */
  sourcePage: string
}

export const leadMagnets: Record<string, LeadMagnet> = {
  'ai-visibility-readiness-checklist': {
    slug: 'ai-visibility-readiness-checklist',
    name: 'AI Visibility Readiness Checklist™',
    downloadPath: '/downloads/AI_Visibility_Readiness_Checklist_Beth_Aden_AI.pdf',
    sourcePage: '/resources/ai-visibility-readiness-checklist',
  },

  // ── Future lead magnets ───────────────────────────────────────────────────
  // 'ai-visibility-quick-start-kit': {
  //   slug: 'ai-visibility-quick-start-kit',
  //   name: 'AI Visibility Quick Start Kit',
  //   downloadPath: '/downloads/AI_Visibility_Quick_Start_Kit.pdf',
  //   sourcePage: '/resources/ai-visibility-quick-start-kit',
  // },
  // 'ai-visibility-audit-prep-kit': {
  //   slug: 'ai-visibility-audit-prep-kit',
  //   name: 'AI Visibility Audit Prep Kit',
  //   downloadPath: '/downloads/AI_Visibility_Audit_Prep_Kit.pdf',
  //   sourcePage: '/resources/ai-visibility-audit-prep-kit',
  // },
}
