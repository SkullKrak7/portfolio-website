import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { WebVitals } from '@/components/WebVitals'

export const metadata: Metadata = {
  title: 'Sai Karthik Kagolanu - ML Engineer & Robotics Graduate',
  description: 'MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP. Two-time hackathon winner with production-grade systems (17K+ LOC, 95%+ test coverage).',
  keywords: ['Machine Learning', 'ML Engineer', 'Computer Vision', 'NLP', 'Robotics', 'Python', 'PyTorch', 'AI', 'Deep Learning'],
  authors: [{ name: 'Sai Karthik Kagolanu' }],
  openGraph: {
    title: 'Sai Karthik Kagolanu - ML Engineer',
    description: 'MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP systems.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Karthik Kagolanu - ML Engineer',
    description: 'MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <WebVitals />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
