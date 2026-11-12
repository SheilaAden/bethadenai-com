import type { Metadata } from 'next'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { Section } from '@/components/global/Section'
import { operationsServices } from '@/lib/operations'

export const metadata: Metadata = {
  title: 'Strategic Operations & AI Systems Services',
  description: 'Hands-on operations support, workflow and AI systems buildout, and coordination for launches, bids, and business transitions.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Section background="silver">
        <Container>
          <h1 className="max-w-3xl text-4xl md:text-5xl">Strategic operations and systems support</h1>
          <p className="mt-5 max-w-2xl text-lg text-graphite">
            Bring me in for a specific project, a workflow that needs fixing, or ongoing help keeping priorities and people aligned.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="space-y-10">
          {operationsServices.map(({ id, title, description, deliverables }) => (
            <article key={id} id={id} className="grid scroll-mt-24 gap-5 border-b border-silver pb-10 last:border-b-0 last:pb-0 md:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl">{title}</h2>
                <p className="mt-4 max-w-xl text-graphite">{description}</p>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-graphite">
                {deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
            </article>
          ))}
        </Container>
      </Section>
      <CTABlock headline="Let’s talk through the work"
        body="Tell me what you’re trying to move forward and what’s getting in the way."
        primaryCTA={{ text: 'Talk Through What’s Stuck', href: '/contact' }} />
    </>
  )
}
