/**
 * Email Sequences
 *
 * Defines follow-up email sequences per lead magnet slug.
 * Each sequence is an ordered array of EmailStep objects.
 *
 * delayDays: 0  = sent immediately at form submission (handled in /api/lead-magnet)
 * delayDays: 2+ = sent via a future scheduled job / cron / Supabase Edge Function
 *                 that reads lead_magnets.created_at + delayDays and fires accordingly
 *
 * To add a Day 2/5/10 email:
 *   1. Add a new EmailStep to the sequence array with the correct delayDays
 *   2. Wire up the scheduled sender (cron endpoint or Supabase scheduled function)
 *   3. The template pattern is identical — just add another entry here
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface EmailStep {
  /** Days after opt-in to send (0 = immediate) */
  delayDays: number
  subject: string
  /** Returns the HTML body — receives firstName so content can be personalized */
  html: (firstName: string) => string
  /** Plain-text fallback */
  text: (firstName: string) => string
}

export type EmailSequence = EmailStep[]

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Wraps content in a shared single-column email shell */
function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
    style="background:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
          style="max-width:600px;background:#ffffff;border-radius:8px;
                 border:1px solid #E8EDF2;overflow:hidden;">

          <!-- Header bar -->
          <tr>
            <td style="background:#0B1F33;padding:20px 32px;">
              <p style="margin:0;font-size:13px;font-weight:bold;
                        letter-spacing:0.08em;color:#00B8AE;text-transform:uppercase;">
                Beth Aden AI
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #E8EDF2;">
              <p style="margin:0;font-size:12px;color:#9AA5AF;line-height:1.6;">
                Beth Aden AI · AI Visibility Strategy for Small Businesses<br/>
                <a href="https://www.bethadenai.com"
                   style="color:#00B8AE;text-decoration:none;">
                  www.bethadenai.com
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ── Sequences ────────────────────────────────────────────────────────────────

export const sequences: Record<string, EmailSequence> = {

  /* ── AI Visibility Readiness Checklist ──────────────────────────────────── */
  'ai-visibility-readiness-checklist': [

    // ── Day 0: Immediate welcome ─────────────────────────────────────────────
    {
      delayDays: 0,
      subject: 'A Quick Note From Beth',

      html: (firstName: string) => emailShell(`
        <p style="margin:0 0 20px;font-size:16px;color:#2E3A46;line-height:1.7;">
          Hi ${firstName},
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
          Thanks for downloading the AI Visibility Readiness Checklist.
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
          If you're like most business owners I talk to, you're probably somewhere between:
        </p>

        <!-- Callout quotes -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
          style="margin:0 0 20px;">
          <tr>
            <td style="background:#F8FAFC;border-left:3px solid #00B8AE;
                       padding:12px 16px;border-radius:0 4px 4px 0;">
              <p style="margin:0;font-size:15px;color:#0B1F33;
                        font-style:italic;line-height:1.6;">
                "AI sounds interesting."
              </p>
            </td>
          </tr>
          <tr><td style="height:10px;"></td></tr>
          <tr>
            <td style="background:#F8FAFC;border-left:3px solid #C8A96B;
                       padding:12px 16px;border-radius:0 4px 4px 0;">
              <p style="margin:0;font-size:15px;color:#0B1F33;
                        font-style:italic;line-height:1.6;">
                "I have no idea what any of this means for my business."
              </p>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
          That's completely normal.
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
          The good news is that AI visibility isn't about chasing algorithms or becoming a
          technology expert. It's about making sure AI systems can clearly understand who you are,
          what you do, where you serve, and why they should trust you.
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
          As you work through the checklist, don't worry about getting a perfect score.
        </p>
        <p style="margin:0 0 4px;font-size:15px;font-weight:bold;color:#0B1F33;">
          The goal isn't perfection.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#2E3A46;line-height:1.7;">
          The goal is identifying the gaps that may be preventing your business from being found,
          understood, and recommended when people ask AI tools who they should work with.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#2E3A46;line-height:1.7;">
          If you get through the checklist and realize you'd like a second set of eyes on it,
          just reply to this email or
          <a href="https://www.bethadenai.com/services/ai-visibility-audit"
             style="color:#00B8AE;text-decoration:none;font-weight:bold;">
            schedule an AI Visibility Audit</a>.
        </p>
        <p style="margin:0 0 28px;font-size:15px;color:#2E3A46;line-height:1.7;">
          I'm always happy to help business owners make sense of what AI is actually seeing.
        </p>

        <!-- Signature -->
        <p style="margin:0;font-size:15px;color:#2E3A46;line-height:1.8;">
          Talk soon,<br/>
          <strong style="color:#0B1F33;">Beth Aden</strong><br/>
          <span style="font-size:13px;color:#9AA5AF;">
            AI Visibility Strategist · Beth Aden AI
          </span>
        </p>
      `),

      text: (firstName: string) => [
        `Hi ${firstName},`,
        ``,
        `Thanks for downloading the AI Visibility Readiness Checklist.`,
        ``,
        `If you're like most business owners I talk to, you're probably somewhere between:`,
        ``,
        `  "AI sounds interesting."`,
        ``,
        `and`,
        ``,
        `  "I have no idea what any of this means for my business."`,
        ``,
        `That's completely normal.`,
        ``,
        `The good news is that AI visibility isn't about chasing algorithms or becoming a`,
        `technology expert. It's about making sure AI systems can clearly understand who you are,`,
        `what you do, where you serve, and why they should trust you.`,
        ``,
        `As you work through the checklist, don't worry about getting a perfect score.`,
        ``,
        `The goal isn't perfection.`,
        ``,
        `The goal is identifying the gaps that may be preventing your business from being found,`,
        `understood, and recommended when people ask AI tools who they should work with.`,
        ``,
        `If you get through the checklist and realize you'd like a second set of eyes on it,`,
        `just reply to this email or schedule an AI Visibility Audit:`,
        `https://www.bethadenai.com/services/ai-visibility-audit`,
        ``,
        `I'm always happy to help business owners make sense of what AI is actually seeing.`,
        ``,
        `Talk soon,`,
        `Beth Aden`,
        `AI Visibility Strategist`,
        `Beth Aden AI`,
        `https://www.bethadenai.com`,
      ].join('\n'),
    },

    // ── Day 2: placeholder — uncomment and fill when ready ──────────────────
    // {
    //   delayDays: 2,
    //   subject: 'The first thing to fix on your checklist',
    //   html: (firstName: string) => emailShell(`...`),
    //   text: (firstName: string) => `...`,
    // },

    // ── Day 5: placeholder ──────────────────────────────────────────────────
    // {
    //   delayDays: 5,
    //   subject: 'Quick question about your checklist score',
    //   html: (firstName: string) => emailShell(`...`),
    //   text: (firstName: string) => `...`,
    // },

    // ── Day 10: placeholder ─────────────────────────────────────────────────
    // {
    //   delayDays: 10,
    //   subject: 'Still thinking about AI visibility?',
    //   html: (firstName: string) => emailShell(`...`),
    //   text: (firstName: string) => `...`,
    // },
  ],
}

  // ── AI Visibility Starter Kit™ — Purchase confirmation ───────────────────
  'ai-visibility-starter-kit': [
    {
      delayDays: 0,
      subject: 'Your AI Visibility Starter Kit™ Is Ready',

      html: (firstName: string, sessionId?: string, downloadToken?: string) => {
        const downloadUrl = sessionId && downloadToken
          ? `https://www.bethadenai.com/api/download/starter-kit?token=${downloadToken}&sid=${sessionId}`
          : 'https://www.bethadenai.com/products/ai-visibility-starter-kit/thank-you'

        return emailShell(`
          <p style="margin:0 0 20px;font-size:16px;color:#2E3A46;line-height:1.7;">
            Hi ${firstName},
          </p>
          <p style="margin:0 0 16px;font-size:15px;color:#2E3A46;line-height:1.7;">
            Your AI Visibility Starter Kit™ is ready.
          </p>
          <p style="margin:0 0 24px;font-size:15px;color:#2E3A46;line-height:1.7;">
            Thank you for your purchase. The kit is 38 pages of practical, non-technical
            guidance designed to help you understand exactly where your business stands
            in AI search — and what to do about it.
          </p>

          <!-- Download button -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
            <tr>
              <td style="background:#00B8AE;border-radius:6px;padding:0;">
                <a href="${downloadUrl}"
                   style="display:inline-block;padding:14px 28px;font-size:15px;
                          font-weight:bold;color:#ffffff;text-decoration:none;
                          letter-spacing:0.01em;">
                  Download Your Starter Kit →
                </a>
              </td>
            </tr>
          </table>

          <p style="margin:0 0 6px;font-size:14px;font-weight:bold;color:#0B1F33;">
            How to use it:
          </p>
          <p style="margin:0 0 8px;font-size:14px;color:#2E3A46;line-height:1.7;">
            Start with the <strong>AI Visibility Reality Check™</strong> on page 4.
            Open ChatGPT, Gemini, and Perplexity. Search your business name.
            What you find (or don't find) will tell you more than any audit.
          </p>
          <p style="margin:0 0 8px;font-size:14px;color:#2E3A46;line-height:1.7;">
            Then work through the <strong>AI Visibility Scorecard™</strong> to get your
            baseline score across all six visibility categories.
          </p>
          <p style="margin:0 0 28px;font-size:14px;color:#2E3A46;line-height:1.7;">
            The <strong>30-Day Action Plan™</strong> tells you exactly what to do first.
          </p>

          <!-- Upsell block -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
            style="background:#F8FAFC;border:1px solid #E8EDF2;
                   border-radius:6px;margin:0 0 24px;">
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:bold;
                           color:#00B8AE;letter-spacing:0.1em;text-transform:uppercase;">
                  Want a professional assessment?
                </p>
                <p style="margin:0 0 12px;font-size:14px;color:#2E3A46;line-height:1.6;">
                  The AI Visibility OS™ Audit goes deeper — a full professional assessment
                  of what AI systems can actually find, understand, trust, and recommend
                  about your business, with a prioritized action report.
                </p>
                <a href="https://www.bethadenai.com/services/ai-visibility-audit"
                   style="font-size:14px;font-weight:bold;color:#00B8AE;text-decoration:none;">
                  Learn about the AI Visibility Audit →
                </a>
              </td>
            </tr>
          </table>

          <p style="margin:0 0 28px;font-size:15px;color:#2E3A46;line-height:1.7;">
            If you have questions about anything in the kit, just reply to this email.
          </p>

          <p style="margin:0;font-size:15px;color:#2E3A46;line-height:1.8;">
            Talk soon,<br/>
            <strong style="color:#0B1F33;">Beth Aden</strong><br/>
            <span style="font-size:13px;color:#9AA5AF;">
              AI Visibility Strategist · Beth Aden AI
            </span>
          </p>
        `)
      },

      text: (firstName: string, sessionId?: string, downloadToken?: string) => {
        const downloadUrl = sessionId && downloadToken
          ? `https://www.bethadenai.com/api/download/starter-kit?token=${downloadToken}&sid=${sessionId}`
          : 'https://www.bethadenai.com/products/ai-visibility-starter-kit/thank-you'

        return [
          `Hi ${firstName},`,
          ``,
          `Your AI Visibility Starter Kit™ is ready.`,
          ``,
          `Thank you for your purchase. Download your kit here:`,
          downloadUrl,
          ``,
          `How to use it:`,
          `Start with the AI Visibility Reality Check™ on page 4. Open ChatGPT, Gemini,`,
          `and Perplexity. Search your business name. What you find will tell you more`,
          `than any audit.`,
          ``,
          `Then work through the AI Visibility Scorecard™ to get your baseline score.`,
          `The 30-Day Action Plan™ tells you exactly what to do first.`,
          ``,
          `If you have questions, just reply to this email.`,
          ``,
          `---`,
          `Want a professional assessment?`,
          `The AI Visibility OS™ Audit is a full assessment of what AI can actually`,
          `find, understand, and recommend about your business.`,
          `https://www.bethadenai.com/services/ai-visibility-audit`,
          ``,
          `Talk soon,`,
          `Beth Aden`,
          `AI Visibility Strategist · Beth Aden AI`,
          `https://www.bethadenai.com`,
        ].join('\n')
      },
    },
  ],
}

// ── Lookup helpers ───────────────────────────────────────────────────────────

/**
 * Returns the purchase confirmation email for a paid product.
 * Includes download link with signed token.
 */
export function getPurchaseEmail(
  slug: string,
  firstName: string,
  sessionId: string,
  downloadToken: string
): { subject: string; html: string; text: string } | null {
  const sequence = sequences[slug]
  if (!sequence) return null
  const step = sequence.find((s) => s.delayDays === 0)
  if (!step) return null

  // The purchase email html/text functions accept optional sessionId + downloadToken
  type ExtendedFn = (firstName: string, sessionId?: string, downloadToken?: string) => string
  return {
    subject: step.subject,
    html: (step.html as ExtendedFn)(firstName, sessionId, downloadToken),
    text: (step.text as ExtendedFn)(firstName, sessionId, downloadToken),
  }
}

/**
 * Returns the Day 0 email for a given slug, with firstName interpolated.
 * Returns null if no sequence or no Day 0 step exists for this slug.
 */
export function getImmediateEmail(
  slug: string,
  firstName: string
): { subject: string; html: string; text: string } | null {
  const sequence = sequences[slug]
  if (!sequence) return null

  const step = sequence.find((s) => s.delayDays === 0)
  if (!step) return null

  return {
    subject: step.subject,
    html: step.html(firstName),
    text: step.text(firstName),
  }
}

/**
 * Returns all steps with delayDays > 0 for scheduling future sends.
 * Use this in a cron/scheduled function to determine what to send
 * based on (now - lead.created_at) >= step.delayDays * 86400 seconds.
 */
export function getFutureSteps(slug: string): EmailStep[] {
  const sequence = sequences[slug]
  if (!sequence) return []
  return sequence.filter((s) => s.delayDays > 0)
}
