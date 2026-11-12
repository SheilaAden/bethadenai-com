import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { Section } from '@/components/global/Section'

export const metadata: Metadata = {
  title: 'About Beth Aden | Strategic Operations & AI Systems Partner',
  description: 'Meet Beth Aden, a hands-on strategic operations partner and practical AI systems builder.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl">I’m Beth Aden.</h1>
            <p className="mt-5 text-xl font-semibold">Strategic Operations &amp; AI Systems Partner</p>
            <div className="mt-6 space-y-5 text-lg text-graphite">
              <p>I started in business. I know what it feels like when everyone is busy and the one thing that needs to move is still sitting there.</p>
              <p>
                I work with business owners and leadership teams when a project crosses departments, a handoff keeps getting missed,
                or a new process needs someone to carry it into day-to-day use. I get the right people in the conversation, make the
                next decisions visible, and help the team follow through.
              </p>
              <p>
                Sometimes that means a better meeting rhythm or a clearer work-order process. Sometimes it means building a dashboard,
                a custom AI assistant, or an automation. I start with the work your team needs to get done.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl bg-silver">
            <Image src="/images/beth-aden-ai-headshot.png" alt="Beth Aden" fill
              sizes="(min-width: 1024px) 44vw, (min-width: 600px) 512px, 100vw" className="object-cover object-center" />
          </div>
        </Container>
      </Section>
      <CTABlock headline="See how I work"
        primaryCTA={{ text: 'See My Work', href: '/work' }}
        secondaryCTA={{ text: 'Get in Touch', href: '/contact' }} />
    </>
  )
}
