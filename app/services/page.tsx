import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { OwnerKnowledgeOffer } from '@/components/global/OwnerKnowledgeOffer'
import { Section } from '@/components/global/Section'
import { operationsServices, selectedWork } from '@/lib/operations'

export const metadata: Metadata = {
  title: 'Strategic Operations & AI Systems Services',
  description: 'Hands-on operations consulting for stalled projects, launches, bids, and business transitions. Beth Aden helps teams clarify ownership and build workflows they can run.',
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
        <Container>
          <h2 className="text-3xl md:text-4xl">Two ways to work with me</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="flex flex-col items-start rounded-lg border border-silver bg-white p-6">
              <h3 className="text-xl">Fix one process</h3>
              <p className="mb-5 mt-3 flex-1 text-graphite">
                We pick a recurring problem. I capture how the work gets done, build the checklist and decision rules,
                and walk the team through it. We agree up front on what the handoff includes.
              </p>
              <Link href="/contact?reason=owner-knowledge#contact-form"
                className="font-semibold text-[#006b65] underline underline-offset-4">
                I have a process to fix
              </Link>
            </article>
            <article className="flex flex-col items-start rounded-lg border border-silver bg-white p-6">
              <h3 className="text-xl">Get ongoing operations support</h3>
              <p className="mb-5 mt-3 flex-1 text-graphite">
                I stay involved to keep priorities, decisions, and handoffs moving across the team.
                We agree up front on what I own and how often we check in.
              </p>
              <Link href="/contact?reason=operations-support#contact-form"
                className="font-semibold text-[#006b65] underline underline-offset-4">
                I need ongoing operations support
              </Link>
            </article>
          </div>
        </Container>
      </Section>
      <OwnerKnowledgeOffer />

      <Section>
        <Container>
          <h2 id="stalled-projects" className="scroll-mt-24 text-3xl md:text-4xl">
            Hands-on operations consulting for stalled projects
          </h2>
          <p className="mt-4 max-w-2xl text-graphite">
            I help business owners get stalled launches, bids, and transitions moving again.
            When deadlines slip and decisions keep landing back on your desk, I work with your
            team to find where work is getting stuck, clarify who owns the next step, and
            put a workflow in place that your team can keep running.
          </p>
          <ul aria-label="Stalled project case studies" className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {selectedWork
              .filter(({ slug }) => slug === 'product-relaunch' || slug === 'paving-bid-and-transition')
              .map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/work/${slug}`} className="font-semibold text-[#006b65] underline underline-offset-4">
                    {title}
                  </Link>
                </li>
              ))}
          </ul>
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
