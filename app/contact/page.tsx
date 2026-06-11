import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import type { FAQItem } from '@/types'
import { ContactForm } from '@/components/global/ContactForm'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Contact Beth Aden AI — Start a Conversation',
  description:
    'Ready to improve your AI visibility? Beth Aden AI personally reviews every inquiry. Reach out to start a conversation about where your business stands in AI search.',
  alternates: {
    canonical: 'https://bethadenai.com/contact',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   ContactPage + BreadcrumbList
   (FAQPage handled by FAQAccordion)
   ───────────────────────────────────────────── */

const contactSchema = {
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
          name: 'Contact',
          item: 'https://bethadenai.com/contact',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://bethadenai.com/contact#page',
      name: 'Contact Beth Aden AI',
      url: 'https://bethadenai.com/contact',
      description:
        'Contact Beth Aden AI to start a conversation about AI visibility for your business.',
      provider: {
        '@id': 'https://bethadenai.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE DATA
   ───────────────────────────────────────────── */

const goodFitReasons = [
  {
    heading: 'You want to know where your business stands in AI search',
    body: "If you've heard that AI search is changing how customers find businesses, but you're not sure what that means for your specific business — an inquiry is the right first step. That question is exactly what the AI Visibility Audit is designed to answer.",
  },
  {
    heading: "You've completed an AI Visibility Audit and need a plan",
    body: "If you have documented AI visibility findings — whether from Beth Aden AI or another source — and you're ready to build a strategy around them, reach out. That's the natural next step from an audit.",
  },
  {
    heading: 'You have a strategy and need guided execution',
    body: "If you've been through an AI visibility strategy engagement and the implementation work hasn't happened yet, get in touch. That's exactly what AI Implementation is for — and the sooner the strategy gets executed, the more useful it is.",
  },
  {
    heading: "You're evaluating whether AI visibility work is worth doing",
    body: "If you're not sure yet whether the investment makes sense for your situation, an honest conversation is a better starting point than a sales page. Beth will tell you directly if there's a clear case for the work — and equally directly if there isn't.",
  },
  {
    heading: "You're interested in having Beth speak to your audience",
    body: "If you're organizing an event, association program, or private session and you're exploring whether Beth is the right speaker, reach out with the relevant details. A speaking inquiry is handled through the same contact form — just select \"Speaking Inquiry\" from the dropdown.",
  },
]

const notRightFor = [
  {
    heading: "You're primarily looking for SEO, social media, or general marketing services",
    body: "That's not what Beth Aden AI offers. If your primary need is traditional search rankings, content production at volume, paid advertising, or social media growth, a general marketing agency or digital marketing consultant is a better fit. Beth Aden AI focuses specifically on AI visibility — how AI-powered systems find, evaluate, and recommend your business. The overlap with traditional marketing exists, but it's not the same work.",
  },
  {
    heading: "You're looking for a fully done-for-you service with no involvement on your end",
    body: "Beth's approach is guided, not hands-off. Every engagement involves your understanding of what's being done and why. If you want to hand a problem to someone and disengage entirely, that's a reasonable preference — but it isn't how this practice works. The goal is for you to own the outcome, which requires some involvement during the engagement.",
  },
  {
    heading: "You're at the very beginning of building a digital presence",
    body: "AI visibility work assumes you have a digital presence to evaluate and improve. If your business doesn't yet have a functioning website, active business profiles, or a basic digital footprint, building those foundations comes before AI visibility optimization. A general web designer or digital marketing generalist is the right starting point. Beth Aden AI can add value once there's a foundation to work with.",
  },
  {
    heading: "You're looking for a long-term retainer relationship",
    body: "Beth Aden AI's services are engagement-based, not retainer-based. Each service has a defined scope and a defined endpoint. The work is built to leave you capable and independent — not reliant on ongoing access to a consultant. If you're looking for an embedded, ongoing digital strategy partner across a range of marketing disciplines, a full-service agency is a better structural fit.",
  },
]

const processSteps = [
  {
    number: '01',
    heading: 'You submit the form',
    body: "Include your name, your business, and a brief description of what you're hoping to address. You don't need to have everything figured out before reaching out — a general sense of what you're dealing with is enough to start a useful conversation.",
  },
  {
    number: '02',
    heading: 'Beth reviews your inquiry personally',
    body: "Every message that comes through this form is read by Beth. There's no team sorting inquiries, no automated response that pretends to be personal, and no VA filtering what gets escalated. Beth reads it and responds.",
  },
  {
    number: '03',
    heading: 'You receive a direct response within 1–2 business days',
    body: "Beth responds to every inquiry within 1–2 business days. The response will address your specific situation directly — not a generic acknowledgment or a scheduling link without context.",
  },
  {
    number: '04',
    heading: "If there's a fit, the next step is a short conversation",
    body: "If your situation aligns with what Beth Aden AI offers, the response will include a recommendation for what makes sense to discuss and a way to set up a brief call. The call is to make sure there's a real fit before anyone commits to anything — not a sales pitch.",
  },
  {
    number: '05',
    heading: "If there isn't a clear fit, you'll hear that too",
    body: "If what you've described doesn't match what this practice does well, Beth will say so — and where possible, she'll point you toward a more useful direction. An honest \"this isn't the right fit\" early is more valuable than discovering that weeks in.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'How quickly does Beth respond to inquiries?',
    answer:
      "Beth reviews and responds to every inquiry within 1–2 business days. She reads every message personally — there's no automated system handling responses on her behalf. If you reach out at the end of the week, expect a response at the start of the next.",
  },
  {
    question: 'Is there a consultation fee for an initial conversation?',
    answer:
      "No. The initial conversation — the short call that follows if there's a potential fit — is not a paid engagement. It's a mutual evaluation: a chance for Beth to understand your situation and for you to understand whether what Beth Aden AI offers is the right response to it. If it leads to a service engagement, that engagement has a defined scope and price. The initial conversation does not.",
  },
  {
    question: "I don't know which service I need. Can I still reach out?",
    answer:
      "Yes. That's one of the most common situations people are in when they reach out. If you're aware that AI search is relevant to your business but you're not sure where to start or which service applies, say that in your message. Beth will help you understand what the right starting point is — and if the answer is \"start with an audit,\" that's what you'll hear.",
  },
  {
    question: 'I work with a marketing agency already. Does that affect whether I should reach out?',
    answer:
      "Not necessarily. AI visibility work is specific enough that it typically doesn't duplicate what a general marketing agency does. If you have an existing agency relationship and you're wondering whether there's a conflict, reach out and describe the situation. Beth will be direct about whether there's meaningful overlap and whether the work would complement or complicate your existing marketing relationships.",
  },
  {
    question: "Can I reach out if I'm just exploring and not ready to start a project?",
    answer:
      "Yes. Exploring is a legitimate reason to start a conversation. If you're trying to understand whether AI visibility work is relevant to your business, what it costs, what it involves, or whether it would make a real difference for a business like yours — those are exactly the questions an initial conversation is for. You're not committing to anything by reaching out.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── SECTION 1: Hero + Form (two-column on desktop) ── */}
      <section className="bg-navy py-16 md:py-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact' },
              ]}
              light
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — Hero copy */}
            <div>
              <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-5">
                Contact
              </h1>
              <p className="text-lg text-silver leading-relaxed mb-4">
                Beth personally reviews every inquiry. If you&#39;re wondering whether Beth Aden AI is the
                right fit for where your business is right now — this is how to find out.
              </p>
              <p className="text-base text-silver/80 leading-relaxed mb-8">
                Use the form to start a conversation. There&#39;s no obligation, no automated sales
                sequence, and no pressure. Just a direct, honest exchange about your situation and
                whether there&#39;s a useful path forward together.
              </p>

              {/* Trust signals */}
              <div className="space-y-3">
                {[
                  'Beth reads every message personally',
                  'Response within 1–2 business days',
                  'No automated sequences or sales pressure',
                  'No obligation — just a direct conversation',
                ].map((signal, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-teal"
                        fill="none"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-silver/80">{signal}</span>
                  </div>
                ))}
              </div>

              {/* What happens next — trust card */}
              <div className="mt-6 rounded-xl border border-white/[0.1] bg-white/[0.04] p-5">
                <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                  What Happens When You Reach Out
                </p>
                <div className="space-y-3">
                  {([
                    ['01', 'You send a message — a sentence or two is enough'],
                    ['02', 'Beth reads it personally and responds directly'],
                    ['03', "If there's a fit, a short call follows — no pressure"],
                  ] as string[][]).map(([num, step]) => (
                    <div key={num} className="flex items-start gap-3">
                      <span className="text-[10px] font-heading font-semibold text-teal/60 mt-0.5 flex-shrink-0">{num}</span>
                      <p className="text-[11px] text-silver/70 leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <p className="text-[11px] text-silver/40">No sales pipeline. No commitment required.</p>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <ContactForm />

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Who Should Contact ── */}
      <Section background="white">
        <Container>
          <SectionLabel>Is This the Right Next Step?</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-10">
            Reaching Out Makes Sense If...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {goodFitReasons.map((reason, i) => (
              <div
                key={i}
                className={`border-t-2 border-teal pt-5 ${
                  i === goodFitReasons.length - 1 && goodFitReasons.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-xl'
                    : ''
                }`}
              >
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {reason.heading}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: Who May Not Need Beth ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>Not the Right Fit? That&#39;s Worth Knowing Too.</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            When Reaching Out Probably Isn&#39;t the Right Move
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Beth Aden AI is a focused practice. It does specific work well. There are situations
            where it isn&#39;t the right fit — and being clear about that upfront is more useful to you
            than taking an inquiry and discovering the mismatch later.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {notRightFor.map((item, i) => (
              <div key={i} className="bg-cloud rounded-lg p-6 border border-silver">
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: Contact Process ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>What Happens Next</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-4">
              How the Conversation Works
            </h2>
            <p className="text-base text-silver leading-relaxed mb-12">
              There&#39;s no complicated intake process here. You send a message. Beth reads it. If
              there&#39;s a potential fit, she responds with clarity about what that looks like.
            </p>
            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-12">
                    <span
                      className="text-4xl font-heading font-semibold text-teal/30 leading-none"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-semibold text-lg text-white mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-base text-silver leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: FAQ ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Frequently Asked Questions About Getting Started
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: Services reference ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-4">
              Not sure what to ask for?
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-6">
              If you&#39;re not sure which service is the right starting point, reviewing the services
              page first will help you frame what you&#39;re looking for — and make your inquiry more
              useful to both of us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                Learn about the AI Visibility Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-silver bg-cloud font-heading font-semibold text-sm text-navy hover:border-teal transition-colors"
              >
                View all services
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: Final CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5">
              Ready to Start the Conversation?
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-8">
              If you&#39;re dealing with AI visibility questions — or if you&#39;re just trying to understand
              where your business stands in AI search — the right first step is a direct conversation.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
            >
              → Back to the contact form
            </a>
            <p className="mt-4 text-sm text-silver/70">
              Beth reviews every inquiry personally and responds within 1–2 business days.
              No automated sequences. No obligation.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
