'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home',                  href: '/' },
  { label: 'Services',              href: '/services' },
  { label: 'AI Visibility Library', href: '/resources' },
  { label: 'Speaking',              href: '/speaking' },
  { label: 'About',                 href: '/about' },
  { label: 'Contact',               href: '/contact' },
]

const CTA_HREF  = '/services/ai-visibility-audit'
const CTA_LABEL = 'Get Your AI Visibility Audit'

/**
 * Site header — sticky, full-width, cloud white background.
 * Includes desktop horizontal nav and mobile hamburger menu.
 * Active link detection via usePathname.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  /** True when this nav item's path matches (or is a parent of) the current route. */
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-cloud border-b border-silver">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="font-heading font-semibold text-xl text-navy hover:text-teal transition-colors"
            aria-label="Beth Aden AI — home"
          >
            Beth Aden AI
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-body transition-colors hover:text-navy',
                  isActive(item.href)
                    ? 'text-navy font-semibold'
                    : 'text-graphite'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:block">
            <Link
              href={CTA_HREF}
              className="inline-flex items-center px-5 py-2.5 bg-teal text-white text-sm font-heading font-semibold rounded-md hover:bg-[#009991] transition-colors"
            >
              {CTA_LABEL}
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy rounded-md hover:bg-silver transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              /* × close icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* ≡ hamburger icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6"  x2="21" y2="6"  />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav panel ── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-silver bg-cloud"
        >
          <nav
            className="w-full max-w-[1200px] mx-auto px-4 md:px-6 pb-4"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center py-3.5 border-b border-silver text-base transition-colors hover:text-teal last:border-0',
                  isActive(item.href)
                    ? 'text-navy font-semibold'
                    : 'text-graphite'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href={CTA_HREF}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                {CTA_LABEL}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
