/**
 * Product Registry
 *
 * Single source of truth for all paid products.
 *
 * STRIPE PAYMENT LINK:
 * Set NEXT_PUBLIC_STRIPE_STARTER_KIT_LINK in .env.local and Vercel environment variables.
 * The payment link must have its success_url configured in Stripe dashboard to:
 *   https://www.bethadenai.com/products/ai-visibility-starter-kit/thank-you?session_id={CHECKOUT_SESSION_ID}
 *
 * NEW ENV VARS REQUIRED:
 *   NEXT_PUBLIC_STRIPE_STARTER_KIT_LINK — public Stripe Payment Link URL
 *   STRIPE_SECRET_KEY                   — Stripe secret key (server-only, never expose client-side)
 *   DOWNLOAD_TOKEN_SECRET               — Secret used to sign download tokens (min 32 chars, random string)
 */

export interface Product {
  /** URL slug — matches /products/[slug] */
  slug: string
  /** Display name */
  name: string
  /** Short tagline */
  tagline: string
  /** Price in USD as display string */
  price: string
  /** Price in cents (for display/comparison only — Stripe handles actual billing) */
  priceInCents: number
  /** Path to PDF in private/ folder (relative to project root) */
  privatePdfPath: string
  /** PDF filename for download */
  pdfFilename: string
  /** Path to product image in /public */
  imagePath: string
  /** Thank-you page path (Stripe success_url target) */
  thankYouPath: string
  /** Stripe Payment Link URL — read from env var */
  stripePaymentLink: string
}

export const products: Record<string, Product> = {
  'ai-visibility-starter-kit': {
    slug: 'ai-visibility-starter-kit',
    name: 'AI Visibility Starter Kit™',
    tagline: 'Get Found. Get Understood. Get Recommended by AI.',
    price: '$27',
    priceInCents: 2700,
    privatePdfPath: 'private/AI_Visibility_Starter_Kit_v2_Beth_Aden_AI.pdf',
    pdfFilename: 'AI_Visibility_Starter_Kit_Beth_Aden_AI.pdf',
    imagePath: '/images/ai-visibility-starter-kit.png',
    thankYouPath: '/products/ai-visibility-starter-kit/thank-you',
    // Reads from env — set NEXT_PUBLIC_STRIPE_STARTER_KIT_LINK in .env.local and Vercel
    stripePaymentLink: process.env.NEXT_PUBLIC_STRIPE_STARTER_KIT_LINK ?? '#',
  },
}
