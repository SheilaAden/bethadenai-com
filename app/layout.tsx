import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { operationsDescription } from '@/lib/operations'
import './globals.css'

/* ─────────────────────────────────────────────
   BRAND FONTS
   ───────────────────────────────────────────── */

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

/* ─────────────────────────────────────────────
   DEFAULT METADATA
   Per-page metadata defined in each page.tsx.
   Title template: "[Page Title] — Beth Aden"
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    default: 'Beth Aden | Strategic Operations & AI Systems Partner',
    template: '%s — Beth Aden',
  },
  description: operationsDescription,
  metadataBase: new URL('https://www.bethadenai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Beth Aden',
    title: 'Beth Aden | Strategic Operations & AI Systems Partner',
    description: operationsDescription,
    images: [{ url: '/images/beth-aden-portrait.webp', alt: 'Beth Aden' }],
  },
  twitter: {
    card: 'summary',
    title: 'Beth Aden | Strategic Operations & AI Systems Partner',
    description: operationsDescription,
    images: [{ url: '/images/beth-aden-portrait.webp', alt: 'Beth Aden' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

/* ─────────────────────────────────────────────
   ROOT LAYOUT
   ───────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body text-navy bg-cloud">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
