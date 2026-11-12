import type { Metadata } from 'next'
import { ContactForm } from '@/components/global/ContactForm'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'

export const metadata: Metadata = {
  title: 'Contact Beth Aden',
  description: 'Talk with Beth Aden about an operational bottleneck, workflow build, upcoming project, or ongoing coordination support.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl">What’s stuck, and what needs to happen next?</h1>
          <p className="mt-5 text-lg text-graphite">
            Tell me what’s happening, who’s involved, and what deadline or decision is driving it. You can reach out about
            one project, a workflow that keeps breaking, or ongoing help with operations.
          </p>
          <p className="mt-6 text-graphite">
            Prefer email? Write to{' '}
            <a className="font-semibold text-[#006b65] underline underline-offset-4" href="mailto:beth@bethadenai.com">
              beth@bethadenai.com
            </a>.
          </p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  )
}
