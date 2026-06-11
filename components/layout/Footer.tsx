import Link from 'next/link'

const footerNav = [
  { label: 'Services',              href: '/services' },
  { label: 'AI Visibility Library', href: '/resources' },
  { label: 'Speaking',              href: '/speaking' },
  { label: 'About',                 href: '/about' },
  { label: 'Contact',               href: '/contact' },
]

const serviceLinks = [
  { label: 'AI Visibility Audit',   href: '/services/ai-visibility-audit' },
  { label: 'AI Strategy',           href: '/services/ai-strategy' },
  { label: 'AI Implementation',     href: '/services/ai-implementation' },
]

/**
 * Site footer — navy background, full-width.
 * Two-column link structure on desktop, stacked on mobile.
 * Privacy and Terms links in fine print (pages added at launch).
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-silver">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand block */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-heading font-semibold text-xl text-white hover:text-teal transition-colors"
              aria-label="Beth Aden AI — home"
            >
              Beth Aden AI
            </Link>
            <p className="mt-3 text-sm text-silver/80 leading-relaxed">
              AI visibility strategy, GEO, AEO, and implementation for small businesses.
            </p>
            <p className="mt-4 text-sm text-silver/80">
              <Link href="/contact" className="text-teal hover:text-white transition-colors font-medium">
                Get in touch →
              </Link>
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">

            <div>
              <h3 className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-silver/50 mb-4">
                Pages
              </h3>
              <ul className="space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-silver/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-silver/50 mb-4">
                Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-silver/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-silver/50">
          <p>© {currentYear} Beth Aden AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-silver/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-silver/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
