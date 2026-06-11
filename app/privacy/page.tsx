import type { Metadata } from 'next'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { Breadcrumb } from '@/components/global/Breadcrumb'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Privacy Policy — Beth Aden AI',
  description:
    'Privacy policy for bethadenai.com. Learn how Beth Aden AI collects, uses, and protects your information.',
  alternates: {
    canonical: 'https://bethadenai.com/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   ───────────────────────────────────────────── */

const privacySchema = {
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
          name: 'Privacy Policy',
          item: 'https://bethadenai.com/privacy',
        },
      ],
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      {/* ── Hero ── */}
      <Section className="bg-graphite pt-24 pb-12">
        <Container>
          <Breadcrumb
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
          <h1 className="font-heading text-4xl font-semibold text-white mt-6">
            Privacy Policy
          </h1>
          <p className="mt-3 text-silver/70 text-sm">
            Last updated: June 10, 2026
          </p>
        </Container>
      </Section>

      {/* ── Body ── */}
      <Section className="bg-cloud-white py-16">
        <Container>
          <div className="max-w-2xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-navy prose-p:text-graphite prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-li:text-graphite">

            <p>
              This privacy policy describes how Beth Aden AI (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo;) collects and
              uses information when you visit bethadenai.com or contact me about services.
            </p>

            <h2>What I Collect</h2>

            <p>
              <strong>Information you provide directly.</strong> When you submit the contact
              form, I receive your name, email address, and the message you write. This
              information is used only to respond to your inquiry.
            </p>

            <p>
              <strong>Analytics data.</strong> This site uses Vercel Analytics to understand
              how visitors find and use the site. Vercel Analytics collects anonymized, aggregate
              data — pages viewed, general location by region, browser type — without
              identifying individual visitors or using cookies for tracking.
            </p>

            <p>
              <strong>Email communications.</strong> If you contact me and we begin working
              together, your email address is retained to communicate about your project.
              I do not add contacts to any mailing list without explicit permission.
            </p>

            <h2>What I Don&apos;t Collect</h2>

            <p>
              I do not use advertising trackers, third-party analytics cookies, remarketing
              pixels, or behavioral profiling tools on this site. I don&apos;t sell, rent, or share
              your personal information with third parties for marketing purposes.
            </p>

            <h2>Cookies</h2>

            <p>
              This site does not set cookies for tracking or advertising. Vercel may set
              functional cookies as part of site delivery; these do not identify you
              individually or persist across sessions for tracking purposes.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              This site is hosted on Vercel. Contact form submissions may be processed through
              a form handling service. Each of these services has its own privacy policy
              governing how it handles data.
            </p>

            <h2>Data Retention</h2>

            <p>
              Contact form messages and email correspondence are retained as long as they are
              relevant to an active or prospective business relationship and deleted when no
              longer needed. I do not maintain databases of visitor information.
            </p>

            <h2>Your Rights</h2>

            <p>
              You can request to know what personal information I hold about you, ask that it
              be corrected, or ask that it be deleted. To make any of these requests, email me
              at{' '}
              <a href="mailto:beth@bethadenai.com">beth@bethadenai.com</a>.
            </p>

            <h2>Children&apos;s Privacy</h2>

            <p>
              This site is not directed at children under 13 and I do not knowingly collect
              personal information from children.
            </p>

            <h2>Changes to This Policy</h2>

            <p>
              If I make material changes to this privacy policy, I&apos;ll update the date at the
              top of this page. Continued use of the site after changes constitutes acceptance
              of the updated policy.
            </p>

            <h2>Contact</h2>

            <p>
              Questions about this privacy policy can be sent to{' '}
              <a href="mailto:beth@bethadenai.com">beth@bethadenai.com</a>.
            </p>

          </div>
        </Container>
      </Section>
    </>
  )
}
