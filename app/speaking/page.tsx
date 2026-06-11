import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '@/components/global/Hero'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import type { FAQItem } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Beth Aden — AI Visibility Speaker for Business Audiences',
  description:
    'Beth Aden speaks to business owners, associations, and professional groups on AI visibility, AI search, and practical AI adoption. Talks designed for business audiences, not technical ones.',
  alternates: {
    canonical: 'https://bethadenai.com/speaking',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   Person + Organization + BreadcrumbList
   (FAQPage handled by FAQAccordion)
   (Event schema added as engagements are confirmed)
   ───────────────────────────────────────────── */

const speakingSchema = {
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
          name: 'Speaking',
          item: 'https://bethadenai.com/speaking',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/about#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      worksFor: {
        '@id': 'https://bethadenai.com/#organization',
      },
      url: 'https://bethadenai.com/about',
      knowsAbout: [
        'AI Visibility',
        'Generative Engine Optimization',
        'Answer Engine Optimization',
        'AI Search Behavior',
        'Practical AI Adoption for Small Business',
        'Structured Data and Schema Markup',
        'Business Operations and AI Integration',
      ],
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

const topics = [
  {
    title: 'Is Your Business Invisible to AI? What Every Business Owner Needs to Know About AI Search',
    tagline: 'The right starting point for any business audience.',
    body: "AI-powered search is already changing how customers find businesses. ChatGPT, Perplexity, Google AI Overviews, and a growing list of tools now recommend businesses in response to natural-language queries — and the businesses they recommend aren't chosen at random. They're chosen because AI systems have the clear, consistent, credible information they need to make a confident recommendation.\n\nThis talk explains what AI visibility is, how it differs from traditional search, why businesses with strong SEO aren't automatically visible to AI, and what the practical gap looks like for a typical small business. The audience leaves with a clear understanding of the AI search environment and a concrete picture of the first step toward improving their position in it.",
    idealFor: 'General business audiences, small business associations, chambers of commerce, professional groups whose members own or operate businesses.',
  },
  {
    title: 'Get Found by AI: A Practical Roadmap for Small Business AI Visibility',
    tagline: 'A deeper dive for audiences ready to move from awareness to action.',
    body: "Building on the foundation of what AI visibility is and why it matters, this talk walks a business audience through the specific elements that determine AI search outcomes for small businesses: structured data, entity definition, content strategy, cross-platform consistency, and the technical signals that tell AI systems your business is credible and relevant.\n\nThe talk is structured as a practical roadmap — not \"here's everything you need to know about AI,\" but \"here are the five things that matter most for a business like yours, in the order you should address them.\" The audience leaves with a sequenced, prioritized picture of what improving AI visibility actually requires — and what they can evaluate before deciding what kind of help they need.",
    idealFor: 'Small business owners and operators, business development organizations, entrepreneur support networks, industry associations whose members compete for customer attention in a local or regional market.',
  },
  {
    title: 'AI Search, Answer Engines, and the Future of How Customers Find You: What GEO and AEO Mean for Your Business',
    tagline: 'For audiences with some digital marketing familiarity who are ready for a more technical explanation.',
    body: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are the emerging disciplines for businesses that want to show up in AI-generated answers and recommendations. This talk explains what GEO and AEO are, how they relate to — and differ from — traditional SEO, and what the practical implications are for businesses trying to maintain and grow their customer discovery in an AI-powered search environment.\n\nThe talk includes a plain-language explanation of how generative AI systems evaluate and select sources, why some businesses show up consistently in AI answers and others don't, and what the most important shifts are for a business owner to make in how they think about their digital presence.",
    idealFor: 'Marketing professionals, business owners with some digital marketing background, industry groups whose members are already engaged with SEO and digital strategy and need to understand the next shift.',
  },
  {
    title: 'AI as a Business Tool: How Operators Are Using AI to Work Faster, Decide Better, and Build More',
    tagline: 'A practical conversation about AI adoption inside a business, not AI search visibility.',
    body: "This talk addresses a different dimension of AI for business: not how AI search finds your business, but how AI tools can improve the way your business operates. Beth speaks from direct operational experience — she runs AI-first workflows across her own business and has integrated AI into research, writing, decision-making, and process design in ways that have materially changed what she can produce and how quickly.\n\nThis talk is honest about where AI makes a genuine difference for small businesses and where it doesn't. It covers the adoption questions that business owners actually ask — how to start, what to use, where the real value is, and how to avoid the time sink of using AI in ways that don't actually move the business forward.",
    idealFor: 'Business owners considering or beginning AI adoption, leadership teams trying to understand where AI investment makes sense, entrepreneur groups, and professional development programs focused on business operations.',
  },
  {
    title: 'The AI-Ready Business: Building the Systems That Make AI Work For You',
    tagline: 'A systems-level conversation about long-term AI readiness for business audiences.',
    body: "Being AI-ready isn't just about having the right tools. It's about having the business systems, the documented processes, and the information architecture that let AI tools deliver on their potential. This talk addresses what it means to build a business that works well with AI — not just one that uses AI tools, but one whose operations are structured to get consistent, high-quality output from them.\n\nBeth covers the relationship between business documentation, process clarity, and AI effectiveness — explaining why businesses with clear operations get more from AI tools than businesses with informal, undocumented processes — and what the practical steps toward AI readiness look like for a small business operator.",
    idealFor: "Business owners focused on scaling and systematizing operations, operations-focused professional groups, business consultants and coaches who work with small business clients, and organizations building AI readiness programs for their communities.",
  },
]

const audiences = [
  {
    title: 'Small Business Owners and Entrepreneurs',
    body: "Business owners who are aware that AI search is changing customer discovery but haven't had a clear, honest explanation of what that means for their specific situation. These audiences are typically smart, time-pressed, and skeptical of hype — they want accurate information and a concrete sense of what to prioritize.",
  },
  {
    title: 'Professional and Trade Associations',
    body: "Industry associations and professional groups whose members own or operate businesses in a specific sector. These audiences often share common AI visibility challenges — similar customer search patterns, similar competitive environments, similar digital presence gaps. Beth's talks can be tailored to address the AI visibility landscape specific to an industry or sector.",
  },
  {
    title: 'Chambers of Commerce and Business Development Organizations',
    body: "Organizations that serve the broader small business community — chambers of commerce, economic development groups, small business development centers, and similar organizations whose mission includes helping local and regional businesses succeed. These audiences respond well to practical, actionable content that applies across industries and business types.",
  },
  {
    title: 'Entrepreneur Support Networks and Accelerators',
    body: "Organizations that work with founders, growth-stage businesses, and entrepreneurs building new ventures. These audiences are often ahead of the curve on technology adoption but may not have considered AI visibility specifically — or may have focused on AI as a productivity tool without thinking through AI discoverability.",
  },
  {
    title: 'Marketing Professionals and Digital Strategy Teams',
    body: "Marketing professionals who understand traditional SEO and digital marketing and need to understand how the AI search shift affects their work. These audiences can absorb more technical detail and benefit from a clear mapping of how AI visibility relates to and diverges from the disciplines they already know.",
  },
]

const takeaways = [
  {
    heading: 'An accurate picture of the AI search environment',
    body: "Most business owners have a vague sense that AI is changing search without a specific understanding of how. After a session with Beth, attendees understand the actual mechanics: what platforms matter, how those platforms evaluate businesses, and why the AI search environment is different from traditional search in ways that require a different response.",
  },
  {
    heading: 'An honest assessment of where their business likely stands',
    body: "Beth's talks include a frank description of what a typical small business's AI visibility looks like — where the most common gaps are, which of those gaps have the most impact, and what the distance between \"not visible to AI\" and \"consistently recommended by AI\" realistically requires. Attendees leave with an honest sense of where they probably stand and what it would take to improve.",
  },
  {
    heading: 'A clear, prioritized picture of what matters most',
    body: "One of the most common responses to AI content is overwhelm — there's so much to consider that it's hard to know where to start. Beth's talks deliberately address that by prioritizing. Attendees leave knowing which area to focus on first, why that area matters most, and what starting on it looks like in practical terms.",
  },
  {
    heading: 'A framework for evaluating next steps',
    body: "Whether the next step for an attendee is working with Beth Aden AI, implementing changes independently, or doing more research first — they leave with enough of a framework to evaluate those options intelligently. The goal isn't to drive a sales outcome from the stage. It's to leave the audience better equipped to make a good decision about their AI visibility.",
  },
]

const formats = [
  {
    title: 'Keynote or Featured Talk',
    length: '30–60 minutes',
    body: "A focused, narrative-driven presentation on a single topic — designed to be the anchor of an event program or a featured session. Best for general-session formats where the audience is diverse and the goal is a shared understanding of the AI visibility landscape.",
  },
  {
    title: 'Workshop or Breakout Session',
    length: '60–90 minutes',
    body: "A more interactive format designed for smaller groups who want to go deeper than a keynote allows. Workshop sessions incorporate more audience interaction — specific questions, working examples, and time for Beth to apply the framework to the specific context of the attendees' industries or businesses.",
  },
  {
    title: 'Panel Participation',
    length: 'Varies by event',
    body: "Beth is available to participate as a panelist on programs addressing AI, digital strategy, business technology, and small business topics. Beth's focus is practical AI visibility for small businesses — most effective in panel contexts that benefit from that specific lens.",
  },
  {
    title: 'Private and In-House Sessions',
    length: 'Custom',
    body: "For organizations that want Beth to speak exclusively to their team, membership, or client base — not at a public event, but in a private format for a specific group. Private sessions can be tailored more specifically to the organization's industry, competitive environment, and AI visibility situation. Available virtually or in person.",
  },
  {
    title: 'Virtual Presentations',
    length: 'All formats',
    body: "All formats above are available virtually. Beth is set up for high-quality virtual delivery and can accommodate live Q&A, audience polling, and other interactive elements depending on the platform and audience size.",
  },
]

const bookingSteps = [
  {
    number: '01',
    heading: 'Inquire',
    body: "Submit a speaking inquiry through the contact page. Include your event name and date, your audience, the format you have in mind, and any specific topic areas or outcomes you're hoping to address.",
  },
  {
    number: '02',
    heading: 'Connect',
    body: "Beth reviews your inquiry and responds personally. If there's a potential fit, a brief call or exchange is set up to discuss the engagement in more detail — topic, audience, format, logistics.",
  },
  {
    number: '03',
    heading: 'Confirm',
    body: "Details are agreed on and confirmed in writing. From there, Beth prepares the session to fit your audience and delivers on the day.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Can speaking topics be customized for our industry or audience?',
    answer:
      "Yes. All of Beth's core topics can be tailored to a specific industry, business type, or audience context. If your attendees are all in a specific sector — professional services, retail, healthcare, real estate, hospitality, or any other — the examples, framing, and specific AI visibility challenges discussed can be calibrated to match. When you reach out about speaking, include information about your audience and what you're hoping they'll take away. That context shapes the approach.",
  },
  {
    question: "What's the right talk for an audience that doesn't know anything about AI visibility yet?",
    answer:
      "The right starting point for a general business audience is \"Is Your Business Invisible to AI?\" — the first topic in the Speaking Topics section. It's designed specifically for audiences who are aware that AI search is changing things but don't yet have a clear picture of what that means for their business. It doesn't assume prior knowledge, and it moves from awareness to practical understanding in a way that works for audiences across industries and business sizes.",
  },
  {
    question: 'Is Beth available for virtual events?',
    answer:
      "Yes. All formats — keynote, workshop, panel, private session — are available virtually. Virtual availability is not limited by geography. If you're organizing an event for a regional or national audience, a distributed team, or an online community, virtual delivery is a fully supported option.",
  },
  {
    question: 'How far in advance should we reach out about speaking availability?',
    answer:
      "For scheduled events with a specific date, reaching out at least 6–8 weeks in advance is recommended — earlier for large conferences or events with complex logistics. For flexible or less time-sensitive engagements, 3–4 weeks is typically workable. If you have an urgent need, it's still worth reaching out — availability isn't always what it appears from the outside.",
  },
  {
    question: 'What does the booking process look like?',
    answer:
      "It starts with an inquiry through the contact page — a brief description of your event, your audience, the format you have in mind, and the date or timeframe you're working with. Beth reviews every inquiry personally and responds within 1–2 business days. If there's a potential fit, the next step is a short conversation to align on topic, format, audience, and logistics. From there, engagement details are confirmed in writing before anything is finalized.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function SpeakingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakingSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="Speaking"
        subheadline="AI is changing how businesses get found, evaluated, and recommended — and most business audiences aren't getting a straight answer about what that means for them."
        body="Beth Aden speaks to business owners, professional associations, and organizational groups on AI visibility, AI search behavior, and practical AI adoption for small and mid-sized businesses. Her talks are designed for the audience that actually runs businesses — not technical teams, not enterprise organizations, not AI enthusiasts. Business owners who need to understand what's happening and what to do about it."
        primaryCTA={{ text: 'Inquire About Speaking', href: '/contact' }}
        secondaryCTA={{ text: '→ See speaking topics ↓', href: '#speaking-topics' }}
        background="navy"
        size="medium"
        rightContent={
          <Image
            src="/images/beth-aden-ai-headshot.png"
            alt="Beth Aden, AI Visibility Strategist and founder of Beth Aden AI"
            width={480}
            height={560}
            className="rounded-2xl border border-white/[0.1] shadow-[0_8px_48px_rgba(0,0,0,0.45)] object-cover w-full max-w-[420px]"
            priority
          />
        }
        rightContentMobile
      />

      {/* Breadcrumb */}
      <div className="bg-cloud border-b border-silver py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Speaking' },
            ]}
          />
        </Container>
      </div>

      {/* ── SECTION 2: Speaker Introduction ── */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Photo placeholder */}
            {/*
              PHOTO NOTE: Replace this placeholder with a <Image> component before launch.
              The Speaking page should include a photo of Beth in a speaking or presenting context —
              presenting to an audience, on camera for a virtual session, or in a professional setting.
              Minimum: one professional portrait. Preferred: a speaking-context image.
              Example implementation:
              <div className="lg:col-span-2">
                <Image
                  src="/images/beth-aden-speaking.jpg"
                  alt="Beth Aden speaking to a business audience"
                  width={560}
                  height={700}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            */}

            <div className="lg:col-span-3">
              <SectionLabel>About Beth</SectionLabel>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-6">
                Who Beth Aden Is and What She Brings to a Business Audience
              </h2>
              <div className="space-y-5">
                <p className="text-base text-graphite leading-relaxed">
                  Beth Aden is an AI visibility strategist who helps small businesses become
                  findable, understandable, and recommendable across AI-powered search and answer
                  platforms. Her work sits at the intersection of AI search behavior, business
                  operations, content strategy, and technical visibility — translating a complex,
                  fast-moving space into clear, practical guidance that business owners can actually
                  use.
                </p>
                <p className="text-base text-graphite leading-relaxed">
                  Before building Beth Aden AI, Beth operated businesses. She understands AI
                  visibility from the operator&#39;s perspective — not as a theoretical discipline, but as
                  a practical business problem. The discovery that AI systems were giving incomplete
                  or inaccurate representations of her own businesses wasn&#39;t a research finding. It
                  was a business problem she solved, built a methodology around, and now helps other
                  business owners address.
                </p>
                <p className="text-base text-graphite leading-relaxed">
                  That perspective — operator first, strategist second — is what makes Beth&#39;s talks
                  land differently than typical AI content. She&#39;s not explaining AI to impress.
                  She&#39;s explaining what AI means for how your customers find you, what it means for
                  how you compete, and what it takes to show up in a space where most businesses are
                  invisible.
                </p>
                <p className="text-base text-graphite leading-relaxed">
                  The audiences who benefit most from Beth&#39;s talks are the ones who know AI search
                  is changing things but haven&#39;t had a clear, honest explanation of what it means for
                  their specific business. That&#39;s the gap her speaking is designed to close.
                </p>
              </div>
            </div>

            {/* Aside — credibility signals, no fabricated data */}
            <div className="lg:col-span-2">
              <div className="bg-silver rounded-lg p-6 border border-silver">
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-graphite/60 mb-4">
                  Speaking at a Glance
                </p>
                <dl className="space-y-4">
                  {[
                    { term: 'Audience', def: 'Business owners, associations, and professional groups' },
                    { term: 'Format', def: 'Keynote, workshop, panel, or private session' },
                    { term: 'Delivery', def: 'In person or virtual' },
                    { term: 'Customization', def: 'Topics tailored to your audience and industry' },
                    { term: 'Focus', def: 'AI visibility, AI search behavior, practical AI adoption' },
                  ].map((item, i) => (
                    <div key={i}>
                      <dt className="text-xs font-heading font-semibold text-navy uppercase tracking-[0.1em] mb-0.5">
                        {item.term}
                      </dt>
                      <dd className="text-sm text-graphite leading-relaxed">{item.def}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 pt-5 border-t border-silver">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-5 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
                  >
                    Inquire About Speaking
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: Speaking Philosophy ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>The Approach</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-8">
              What Makes a Good AI Talk for a Business Audience
            </h2>
            <div className="space-y-5 mb-12">
              <p className="text-base text-silver leading-relaxed">
                Most AI content aimed at business audiences falls into one of two traps.
              </p>
              <p className="text-base text-silver leading-relaxed">
                The first is hype. The speaker leads with dramatic claims about transformation,
                disruption, and the urgency of acting now. The audience leaves feeling anxious and
                vaguely motivated — but without anything concrete to do. The urgency was real. The
                clarity was absent.
              </p>
              <p className="text-base text-silver leading-relaxed">
                The second is technical depth that doesn&#39;t translate. The speaker knows the subject
                well but addresses it at the level of the systems rather than the level of the
                business. The audience learns how AI works. They leave without knowing what to do
                with that knowledge.
              </p>
              <p className="text-base text-silver leading-relaxed">
                Beth&#39;s talks are built around neither of those approaches. The goal of any session
                Beth leads is for the audience to leave with three things: an accurate picture of what
                AI search means for their specific business situation, a clear understanding of the
                most important thing to focus on first, and enough context to evaluate the next steps
                available to them — whether those steps involve working with Beth or not.
              </p>
              <p className="text-base text-silver leading-relaxed">
                The standard for a successful talk isn&#39;t the reaction in the room. It&#39;s whether the
                people who were there made a better decision about their AI visibility in the months
                that followed.
              </p>
            </div>

            {/* Three principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  principle: 'No hype.',
                  body: "AI search is genuinely changing how businesses get found. That reality doesn't need embellishment. Accurate framing is more useful — and more motivating — than inflated urgency.",
                },
                {
                  principle: 'No jargon without translation.',
                  body: "Terms like GEO, AEO, entity recognition, and schema markup matter. But they only matter if the audience understands what they mean for their business. Every technical concept is introduced with a plain-language explanation and a practical example.",
                },
                {
                  principle: "No talk that doesn't lead somewhere.",
                  body: "Every session Beth delivers ends with a clear, actionable picture of what the audience can do next — not a general directive to \"invest in AI,\" but a specific, honest description of the most useful first step.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <p className="font-heading font-semibold text-teal text-base mb-3">
                    {item.principle}
                  </p>
                  <p className="text-sm text-silver leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: Speaking Topics ── */}
      <Section background="white" id="speaking-topics">
        <Container>
          <SectionLabel>Topics</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            What Beth Speaks On
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-12">
            Beth speaks on AI visibility, AI search behavior, and practical AI adoption for business
            audiences. Each topic can be delivered as a standalone talk, a workshop session, or as
            part of a broader program, and can be tailored to the specific industry or context of
            the audience.
          </p>

          <div className="space-y-8 max-w-3xl">
            {topics.map((topic, i) => (
              <div key={i} className="bg-silver rounded-lg p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="flex-shrink-0 text-sm font-heading font-semibold text-teal/60 mt-1"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading font-semibold text-base md:text-lg text-navy leading-snug">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-sm text-teal font-heading font-semibold italic mb-4 pl-9">
                  {topic.tagline}
                </p>
                <div className="space-y-3 pl-9">
                  {topic.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm text-graphite leading-relaxed">
                      {para}
                    </p>
                  ))}
                  <p className="text-xs text-graphite/60 pt-2">
                    <span className="font-heading font-semibold">Ideal for:</span>{' '}
                    {topic.idealFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: Ideal Audiences ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
            Who Benefits Most from Beth&#39;s Talks
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Beth&#39;s speaking is designed for business-focused audiences — people who operate
            businesses, lead organizations, or advise the people who do. The common thread is
            practical application: audiences that need to understand what AI means for their
            business, not audiences looking for a technical deep-dive or a general technology
            overview.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {audiences.map((audience, i) => (
              <div
                key={i}
                className={`bg-cloud rounded-lg p-6 border border-silver ${
                  i === audiences.length - 1 && audiences.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-xl'
                    : ''
                }`}
              >
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{audience.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: What Attendees Learn ── */}
      <Section background="white">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
            What Attendees Walk Away With
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Every talk Beth delivers is built around a specific takeaway — not a general sense of
            inspiration, but a concrete shift in how the audience understands their situation and
            what they can do about it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {takeaways.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 text-teal text-xs font-heading font-semibold flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-base text-navy mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: Event Formats ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
            How Beth Speaks
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Beth is available for the following formats. Format and length can be tailored to the
            event&#39;s structure and the audience&#39;s needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {formats.map((format, i) => (
              <div
                key={i}
                className={`bg-cloud rounded-lg p-6 border border-silver ${
                  i === formats.length - 1 && formats.length % 3 !== 0
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }`}
              >
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-teal mb-2">
                  {format.length}
                </p>
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {format.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{format.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: FAQ ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Questions About Booking and Speaking Topics
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9: Booking Process ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>How to Book</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-4">
              What Happens When You Reach Out
            </h2>
            <p className="text-base text-silver leading-relaxed mb-12">
              Booking starts with a single inquiry. No lengthy forms, no automated qualification
              sequences. You describe your event, your audience, and what you&#39;re looking for. Beth
              reviews every inquiry herself and responds within 1–2 business days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bookingSteps.map((step, i) => (
                <div key={i} className="relative">
                  <span
                    className="text-5xl font-heading font-semibold text-teal/20 leading-none block mb-4"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-white mb-3">
                    {step.heading}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed">{step.body}</p>
                  {/* Connector line between steps */}
                  {i < bookingSteps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-6 left-full w-full h-px bg-teal/20 -translate-x-4"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-silver leading-relaxed">
                Confirmed speaking engagements are documented in writing before any commitment is
                final — dates, format, topic, logistics, and any relevant terms.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Future additions placeholder comment */}
      {/*
        FUTURE ADDITIONS (add when real data is available):
        - Past Engagements section: event names, audience sizes
        - Organizer testimonials / "What Organizers Say"
        - Downloadable speaker one-sheet (PDF) — add link to hero and CTA sections
        - Event schema entries for confirmed engagements
        Do not add fabricated appearances, generic endorsements, or placeholder testimonials.
      */}

      {/* ── SECTION 10: CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5">
              Bring a Clear AI Conversation to Your Audience
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-8">
              If your event or organization serves business owners who need to understand AI search
              — without hype, without jargon, and without leaving them more confused than they
              arrived — Beth is available to speak.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
              >
                Submit a Speaking Inquiry
              </Link>
              <p className="text-sm text-silver/70">
                Beth reviews every inquiry personally and responds within 1–2 business days.
              </p>
              <Link
                href="/services"
                className="text-sm text-silver/60 hover:text-silver underline underline-offset-2 transition-colors"
              >
                → Learn about Beth&#39;s services
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
