import type { Metadata } from 'next'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { Breadcrumb } from '@/components/global/Breadcrumb'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Terms of Use — Beth Aden AI',
  description:
    'Terms of use for bethadenai.com and Beth Aden AI services.',
  alternates: {
    canonical: 'https://bethadenai.com/terms',
  },
  robots: {
    index: false,
    follow: true,
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   ───────────────────────────────────────────── */

const termsSchema = {
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
          name: 'Terms of Use',
          item: 'https://bethadenai.com/terms',
        },
      ],
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      {/* ── Hero ── */}
      <Section className="bg-graphite pt-24 pb-12">
        <Container>
          <Breadcrumb
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Use' },
            ]}
          />
          <h1 className="font-heading text-4xl font-semibold text-white mt-6">
            Terms of Use
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
              By accessing or using bethadenai.com, you agree to these terms. If you don&apos;t
              agree, please don&apos;t use the site.
            </p>

            <h2>Use of This Site</h2>

            <p>
              You may use this site for lawful purposes only. You may not use it in any way
              that could damage, disable, or impair the site, interfere with other users&apos;
              access, or attempt to gain unauthorized access to any part of it.
            </p>

            <p>
              The content on this site — articles, guides, service descriptions, frameworks —
              is for informational purposes. It does not constitute professional advice
              specific to your situation.
            </p>

            <h2>Intellectual Property</h2>

            <p>
              All content on bethadenai.com — including text, graphics, frameworks,
              methodologies, and design — is owned by Beth Aden AI unless otherwise noted.
              You may not reproduce, distribute, or create derivative works from this content
              without written permission, except as permitted below.
            </p>

            <p>
              <strong>Fair use.</strong> You may quote brief excerpts from articles with
              attribution and a link back to the original page. Reproducing full articles,
              guides, or frameworks — in whole or substantial part — is not permitted without
              written permission.
            </p>

            <h2>Services</h2>

            <p>
              Services provided by Beth Aden AI — including AI Visibility Audits, AI Strategy,
              and AI Implementation work — are governed by separate client agreements. Nothing
              on this site creates a service relationship or obligation without a signed
              agreement.
            </p>

            <p>
              Beth Aden AI reserves the right to decline any inquiry or engagement at its
              discretion.
            </p>

            <h2>No Warranties</h2>

            <p>
              This site and its content are provided &ldquo;as is.&rdquo; I make no warranties, express
              or implied, about the accuracy, completeness, or fitness of any content for a
              particular purpose. AI visibility, SEO, and related disciplines involve
              third-party platforms and systems outside my control; outcomes cannot be
              guaranteed.
            </p>

            <h2>Limitation of Liability</h2>

            <p>
              To the fullest extent permitted by law, Beth Aden AI will not be liable for
              any indirect, incidental, or consequential damages arising from your use of
              this site or reliance on its content. My total liability for any claim arising
              from this site will not exceed the amount you paid to access it (which is zero
              for free content).
            </p>

            <h2>External Links</h2>

            <p>
              This site may link to third-party websites. These links are provided for
              convenience; I don&apos;t endorse or control the content of external sites and am
              not responsible for them.
            </p>

            <h2>Changes to These Terms</h2>

            <p>
              I may update these terms at any time. The updated date at the top of this page
              reflects when changes were last made. Continued use of the site after changes
              constitutes acceptance of the updated terms.
            </p>

            <h2>Governing Law</h2>

            <p>
              These terms are governed by the laws of the State of Texas, without regard to
              conflict of law principles.
            </p>

            <h2>Contact</h2>

            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:beth@bethadenai.com">beth@bethadenai.com</a>.
            </p>

          </div>
        </Container>
      </Section>
    </>
  )
}
