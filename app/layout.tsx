import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { WebVitals } from '@/components/WebVitals'
import ThemeProvider from '@/components/ThemeProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Sai Karthik Kagolanu — AI & ML Engineer',
  description: 'MSc Robotics graduate building AI agents, ML pipelines, and production backends. Two-time hackathon winner.',
  keywords: ['Machine Learning', 'ML Engineer', 'AI Agents', 'Computer Vision', 'NLP', 'Robotics', 'Python', 'PyTorch', 'AI', 'Deep Learning'],
  authors: [{ name: 'Sai Karthik Kagolanu' }],
  openGraph: {
    title: 'Sai Karthik Kagolanu — AI & ML Engineer',
    description: 'MSc Robotics graduate building AI agents, ML pipelines, and production backends. Two-time hackathon winner.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Karthik Kagolanu — AI & ML Engineer',
    description: 'MSc Robotics graduate building AI agents, ML pipelines, and production backends. Two-time hackathon winner.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ThemeProvider>
          <Analytics />
          <SpeedInsights />
          <WebVitals />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
