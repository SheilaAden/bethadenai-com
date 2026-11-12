import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { Section } from '@/components/global/Section'
import { selectedWork } from '@/lib/operations'

type CaseStudyProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return selectedWork.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params
  const study = selectedWork.find((work) => work.slug === slug)
  if (!study) notFound()

  return {
    title: study.headline,
    description: study.description,
    alternates: { canonical: `/work/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params
  const study = selectedWork.find((work) => work.slug === slug)
  if (!study) notFound()

  return (
    <>
      <Section background="silver">
        <Container>
          <Link href="/work" className="font-semibold text-[#006b65] underline underline-offset-4">
            Back to Selected Work
          </Link>
          <h1 className="mt-5 max-w-4xl text-4xl md:text-5xl">{study.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg text-graphite">{study.description}</p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl">What was happening</h2>
              <p className="mt-3 max-w-xl text-graphite">{study.situation}</p>
            </section>
            <section>
              <h2 className="text-2xl">What I owned</h2>
              <p className="mt-3 max-w-xl text-graphite">{study.role}</p>
            </section>
            {slug === 'product-relaunch' && (
              <figure className="border-l-4 border-teal bg-silver px-5 py-4">
                <blockquote className="text-xl font-semibold">
                  “Astute business leader who understands both strategy and execution”
                </blockquote>
                <figcaption className="mt-2 text-sm text-graphite">Michael Pekkarinen</figcaption>
              </figure>
            )}
            <section>
              <h2 className="text-2xl">What the team delivered</h2>
              <p className="mt-3 max-w-xl text-graphite">{study.outcome}</p>
            </section>
          </div>
          <section className="self-start rounded-xl border border-silver bg-white p-5 sm:p-7">
            <h2 className="text-2xl">Example handoff tracker</h2>
            <p className="mt-2 text-sm text-graphite">An illustrative example of how I make ownership and handoffs visible.</p>
            <ul className="mt-5 divide-y divide-silver">
              {study.tracker.map(({ work, owner, handoff }) => (
                <li key={work} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-base">{work}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#006b65]">{owner}</p>
                  <p className="mt-1 text-sm text-graphite">{handoff}</p>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Section>
      <CTABlock headline="What work needs someone to pull it together?"
        primaryCTA={{ text: 'Talk Through What’s Stuck', href: '/contact' }} />
    </>
  )
}
