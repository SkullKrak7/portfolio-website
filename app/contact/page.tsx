'use client'
import { useState } from 'react'
import Toast from '@/components/Toast'

// API service that can be mocked in tests
export const submitContactForm = async (data: { name: unknown; email: unknown; message: unknown }) => {
  const response = await fetch('https://formspree.io/f/mzdadpgn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to send');
  return { success: true };
};

// Separate component for testing
export function ContactForm({ 
  onSubmit = submitContactForm 
}: { 
  onSubmit?: typeof submitContactForm 
} = {}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')

  const copyEmail = () => {
    navigator.clipboard.writeText('sai.kagolanu@yahoo.com')
    setCopied(true)
    setToastMessage('Email copied to clipboard!')
    setToastType('success')
    setShowToast(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    if (!data.name || !data.email || !data.message) {
      setStatus('error')
      setToastMessage('Please fill in all fields')
      setToastType('error')
      setShowToast(true)
      return
    }

    try {
      await onSubmit(data);
      setStatus('success')
      setToastMessage('Message sent successfully!')
      setToastType('success')
      setShowToast(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setStatus('error')
      setToastMessage('Failed to send message. Please try again.')
      setToastType('error')
      setShowToast(true)
    }
  }

  return (
    <main className="flex-1 py-4 lg:py-6" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Get in Touch</h1>
        <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
          Interested in working together? Let's connect!
        </p>

        <div className="rounded-lg p-6 mb-4" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Direct Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-subtle)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Email</h3>
              <div className="flex items-center gap-2">
                <a href="mailto:sai.kagolanu@yahoo.com" className="hover:underline" style={{ color: 'var(--accent)' }}>
                  sai.kagolanu@yahoo.com
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <svg className="w-5 h-5" style={{ color: 'var(--accent-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-subtle)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Phone</h3>
              <a href="tel:+447775439150" className="hover:underline" style={{ color: 'var(--accent)' }}>
                +44 7775 439150
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                minLength={2}
                className="w-full px-4 py-2 rounded-lg transition-colors"
                style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg transition-colors"
                style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                minLength={10}
                rows={6}
                className="w-full px-4 py-2 rounded-lg transition-colors resize-none"
                style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 rounded-lg disabled:opacity-50 font-medium"
              style={{ background: 'var(--accent)', color: 'var(--bg-page)' }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
    </main>
  )
}

// Page component (no props allowed in Next.js App Router)
export default function ContactPage() {
  return <ContactForm />;
}
