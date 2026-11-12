import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { CTABlock } from '@/components/global/CTABlock'
import { LaunchWorkflow } from '@/components/global/LaunchWorkflow'
import { Section } from '@/components/global/Section'
import { operationsDescription, operationsServices, selectedWork } from '@/lib/operations'

export const metadata: Metadata = {
  title: { absolute: 'Beth Aden | Strategic Operations & AI Systems Partner' },
  description: operationsDescription,
}

export default function Home() {
  return (
    <>
      <Section className="border-b border-silver">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-wide text-[#006b65]">
              Beth Aden · Strategic Operations &amp; AI Systems Partner
            </p>
            <h1 className="max-w-3xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              I bring order to chaos and get the work moving.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-graphite">
              When priorities are competing and nobody has the whole picture, I step in as the central point between
              leadership and the teams doing the work. I turn decisions into clear owners, deadlines, and workflows
              so launches go out, bids get ready, and day-to-day work keeps moving.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-[#006b65] px-5 py-3 font-semibold text-white hover:bg-[#005650]">
                Talk Through What’s Stuck
              </Link>
              <Link href="/work" className="rounded-md border border-navy/30 px-5 py-3 font-semibold hover:bg-silver">
                See My Work
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-xl bg-silver">
            <Image src="/images/beth-aden-portrait.webp" alt="Beth Aden" fill priority
              sizes="(min-width: 1024px) 44vw, (min-width: 600px) 448px, 100vw"
              className="object-cover object-center" />
          </div>
        </Container>
      </Section>

      <LaunchWorkflow />

      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl">Where I can step in</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {operationsServices.map(({ id, title, description }) => (
              <article key={id} className="flex flex-col rounded-lg border border-silver bg-white p-6">
                <h3 className="text-xl">{title}</h3>
                <p className="mb-5 mt-3 flex-1 text-graphite">{description}</p>
                <Link href={`/services#${id}`} className="font-semibold text-[#006b65] underline-offset-4 hover:underline">
                  Explore {title.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 border-t border-silver pt-6">
            <h3 className="text-xl">What’s stuck?</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { reason: 'project-coordination', label: 'My project is stalled' },
                { reason: 'workflow-systems', label: 'Our handoffs keep breaking' },
                { reason: 'operations-support', label: 'I need ongoing operations support' },
              ].map(({ reason, label }) => (
                <Link key={reason} href={`/contact?reason=${reason}#contact-form`}
                  className="rounded-md border border-navy/25 px-4 py-2.5 font-semibold text-[#006b65] hover:bg-silver">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="silver">
        <Container>
          <h2 className="text-3xl md:text-4xl">Selected work</h2>
          <div className="my-8 grid gap-8 md:grid-cols-2">
            {selectedWork.map(({ slug, title, description }) => (
              <article key={title} className="border-t border-navy/20 pt-5">
                <h3 className="text-xl"><Link href={`/work/${slug}`} className="underline-offset-4 hover:underline">{title}</Link></h3>
                <p className="mt-3 text-graphite">{description}</p>
              </article>
            ))}
          </div>
          <Link href="/work" className="font-semibold text-[#006b65] underline underline-offset-4">
            See more of my work
          </Link>
        </Container>
      </Section>

      <CTABlock headline="What’s stuck in your business?"
        body="Tell me what needs to happen and where the work keeps getting held up."
        primaryCTA={{ text: 'Talk Through What’s Stuck', href: '/contact' }} />
    </>
  )
}
