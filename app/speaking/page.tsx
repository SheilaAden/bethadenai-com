import type { Metadata } from 'next'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { Section } from '@/components/global/Section'

export const metadata: Metadata = {
  title: 'Speaking on Practical AI and Business Systems',
  description: 'Talks and workshops with Beth Aden on practical AI adoption and building business workflows teams can use.',
  alternates: { canonical: '/speaking' },
}

export default function SpeakingPage() {
  return (
    <>
      <Section background="silver">
        <Container>
          <h1 className="text-4xl md:text-5xl">Speaking &amp; workshops</h1>
          <p className="mt-5 max-w-2xl text-lg text-graphite">
            Practical sessions for business owners, leadership teams, and associations working through how to use AI in everyday operations.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl">AI as a Business Tool</h2>
            <p className="mt-4 text-graphite">Find places in your daily work where AI can help and learn how to test a use case before rolling it out to the team.</p>
          </article>
          <article>
            <h2 className="text-2xl">The AI-Ready Business</h2>
            <p className="mt-4 text-graphite">Learn how clear ownership, documented workflows, and reliable handoffs make AI tools easier to use and maintain.</p>
          </article>
        </Container>
      </Section>
      <CTABlock headline="Planning an event or team workshop?"
        primaryCTA={{ text: 'Ask About Speaking', href: '/contact' }} />
    </>
  )
}
