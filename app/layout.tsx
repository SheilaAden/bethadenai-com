import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
   Title template: "[Page Title] — Beth Aden AI"
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    default: 'Beth Aden AI — AI Visibility for Small Businesses',
    template: '%s — Beth Aden AI',
  },
  description:
    'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI search, answer engines, and automated decision systems.',
  metadataBase: new URL('https://bethadenai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bethadenai.com',
    siteName: 'Beth Aden AI',
    title: 'Beth Aden AI — AI Visibility for Small Businesses',
    description:
      'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI search, answer engines, and automated decision systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beth Aden AI — AI Visibility for Small Businesses',
    description:
      'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI search, answer engines, and automated decision systems.',
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
