import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { Section } from '@/components/global/Section'
import { selectedWork } from '@/lib/operations'

export const metadata: Metadata = {
  title: 'Selected Operations & Systems Work',
  description: 'Examples of Beth Aden’s work in product relaunch coordination, paving operations, and building practical business tools.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <Section background="silver">
        <Container>
          <h1 className="text-4xl md:text-5xl">Selected work</h1>
          <p className="mt-5 max-w-2xl text-lg text-graphite">
            Here’s what it looks like when I step into work with a lot of moving parts, get the right people aligned, and help the team carry it through.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {selectedWork.map(({ slug, title, description }) => (
            <article key={title} className="rounded-lg border border-silver bg-white p-6">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-4 text-graphite">{description}</p>
              <Link href={`/work/${slug}`} aria-label={`Read case study: ${title}`} className="mt-5 inline-block font-semibold text-[#006b65] underline underline-offset-4">
                Read case study
              </Link>
            </article>
          ))}
          <article className="rounded-lg border border-silver bg-white p-6">
            <h2 className="text-2xl">Ozark Mountains Distillery</h2>
            <p className="mt-4 text-graphite">
              I built the Proofmaster™ calculator for distillery workflows and supported business planning,
              marketing, and investor materials with practical AI workflows.
            </p>
          </article>
        </Container>
      </Section>
      <CTABlock headline="Tell me what you’re working on"
        primaryCTA={{ text: 'Talk Through What’s Stuck', href: '/contact' }} />
    </>
  )
}
