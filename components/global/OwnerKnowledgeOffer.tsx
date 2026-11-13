import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'

export function OwnerKnowledgeOffer({ showHandoff = false }: { showHandoff?: boolean }) {
  return (
    <Section id="owner-knowledge" background="silver" className="scroll-mt-24">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h2 className="max-w-xl text-3xl md:text-4xl">If your team has to ask you every time, let’s fix that.</h2>
          <p className="mt-5 max-w-xl text-lg text-graphite">
            Pick one part of the business that keeps pulling you back in. I’ll sit down with you or the person who knows
            it best, capture how the work actually gets done, and turn it into a workflow your team can run.
          </p>
          <Link href="/contact?reason=owner-knowledge#contact-form"
            className="mt-6 inline-block rounded-md bg-[#006b65] px-5 py-3 font-semibold text-white hover:bg-[#005650]">
            Tell me what keeps coming back to you
          </Link>
        </div>
        <div className="rounded-lg border border-navy/15 bg-cloud p-6">
          <h3 className="text-xl">What your team gets</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-graphite">
            <li>A checklist that follows how the work actually gets done.</li>
            <li>Clear ownership and handoffs at each step.</li>
            <li>Decision rules for exceptions and when to bring you in.</li>
          </ul>
          <p className="mt-4 text-graphite">We’ll test the workflow with the people who’ll use it.</p>
        </div>
      </Container>
      {showHandoff && (
        <Container className="mt-8">
          <div className="border-t border-navy/15 pt-6">
            <h3 className="text-xl">What happens after we build it?</h3>
            <p className="mt-3 max-w-3xl text-graphite">
              We start with one process that keeps coming back to you. I build it with you, test it with your team,
              and show them how to run it. From there, your team can take it over, or you can bring me on for ongoing
              operations support.
            </p>
          </div>
        </Container>
      )}
    </Section>
  )
}
