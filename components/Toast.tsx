'use client'
import { useEffect, useState } from 'react'

export default function Toast({ message, type = 'success', onClose }: { 
  message: string
  type?: 'success' | 'error' | 'info'
  onClose: () => void 
}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  }

  return (
    <div className={`fixed top-20 right-8 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className={`${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3`}>
        {type === 'success' && (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {type === 'error' && (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span>{message}</span>
      </div>
    </div>
  )
}
