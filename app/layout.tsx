import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sai Karthik Kagolanu - ML Engineer',
  description: 'MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP. Two-time hackathon winner with production-grade systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
