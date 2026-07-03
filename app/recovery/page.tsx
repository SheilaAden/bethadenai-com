import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Visibility for Addiction Treatment & Recovery Centers | Beth Aden AI',
  description:
    'When families ask ChatGPT for help finding treatment, does AI name your program — or your competitor? Beth Aden AI helps recovery centers become visible in AI search.',
  alternates: {
    canonical: 'https://bethadenai.com/recovery',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   ───────────────────────────────────────────── */

const recoverySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bethadenai.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI Visibility for Recovery Centers',
          item: 'https://bethadenai.com/recovery',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/recovery#service',
      name: 'AI Visibility Audit for Addiction Treatment and Recovery Programs',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'AI visibility audit for addiction treatment centers, sober living homes, and behavioral health programs — assessing and improving how AI systems like ChatGPT, Perplexity, and Google AI find and recommend recovery resources to families in crisis.',
      serviceType: 'AI Visibility Audit',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      url: 'https://bethadenai.com/recovery',
      offers: {
        '@type': 'Offer',
        price: '500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://bethadenai.com/recovery',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/about#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      worksFor: { '@id': 'https://bethadenai.com/#organization' },
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function RecoveryPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recoverySchema) }}
      />

      {/* ── HERO ── */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Label */}
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-6">
              AI Visibility for Recovery Centers
            </p>

            {/* Headline */}
            <h1 className="font-heading font-semibold text-3xl md:text-5xl text-white leading-tight mb-6">
              When a family asks ChatGPT for help at 2am, does it name your center — or your competitor?
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-silver/90 leading-relaxed mb-10">
              Families don&rsquo;t just Google treatment anymore. They ask AI. If AI doesn&rsquo;t know
              your program exists, you don&rsquo;t exist at 2am — no matter how good your care is.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
            >
              Get Your Audit — $500
            </Link>
          </div>
        </Container>
      </section>

      {/* ── THE SHIFT ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-4">
              The Shift
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy leading-tight mb-6">
              The search for treatment has changed.
            </h2>
            <div className="space-y-5 text-base md:text-lg text-graphite leading-relaxed">
              <p>
                A mother searching for help for her son isn&rsquo;t scrolling ten pages of directory
                sites — she&rsquo;s asking ChatGPT, Perplexity, and Google&rsquo;s AI one question:
                &ldquo;Where should I send him?&rdquo;
              </p>
              <p>
                The answer comes back as three or four names. Either yours is one of them, or a family
                that needed you never finds you.
              </p>
              <p>
                This isn&rsquo;t a future problem. It&rsquo;s the search behavior of families in crisis
                right now. Most recovery programs have no idea whether they appear in those answers —
                or what they would need to change to show up.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHY ME ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-4">
              Why Me
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy leading-tight mb-6">
              I chose this industry on purpose.
            </h2>
            <div className="space-y-5 text-base md:text-lg text-graphite leading-relaxed">
              <p>
                I&rsquo;m Beth Aden. I do AI visibility work — schema, structured data, and AI search
                positioning — and I chose to focus here specifically.
              </p>
              <p>
                Both of my kids are three years into recovery. I know the 2am search personally, from
                the family side. I know what it feels like to be desperate for a name, a program, a
                phone number — and to find a directory of paid listings instead of a clear answer.
              </p>
              <p>
                Now I make sure that when families ask AI for help, the right programs are part of the
                answer. Programs that actually do the work. Programs that deserve to be found.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── OFFER ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-4">
              The Audit
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white leading-tight mb-8">
              The AI Visibility Audit — $500
            </h2>

            <ul className="space-y-4 mb-8">
              {[
                'Exactly how AI engines currently describe — or ignore — your program',
                "Where you're invisible compared to competitors in your space",
                'Your top 5 fixes, in priority order',
                'Delivered within 5 business days',
                'Work begins upon payment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-teal mt-0.5 flex-shrink-0 text-lg leading-none" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-silver leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
            >
              Get Your Audit — $500
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── CLOSING ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-graphite leading-relaxed">
              Want to see what ChatGPT says about your center right now?{' '}
              <a
                href="mailto:beth@bethadenai.com"
                className="text-teal hover:text-navy underline underline-offset-2 transition-colors font-medium"
              >
                Email me
              </a>{' '}
              and I&rsquo;ll send you the screenshot — takes me two minutes, and it&rsquo;s yours
              either way.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
