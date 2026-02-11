'use client'

import { useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  title: string
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  const scrollToImage = (index: number) => {
    setCurrentIndex(index)
    const container = document.querySelector('.carousel-container')
    const width = container?.clientWidth || 0
    container?.scrollTo({ left: width * index, behavior: 'smooth' })
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    scrollToImage(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    scrollToImage(newIndex)
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  return (
    <div className="mb-8 relative group" onKeyDown={handleKeyDown} tabIndex={0} role="region" aria-label={`${title} image carousel`}>
      <div className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide">
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-center rounded-xl overflow-hidden shadow-lg relative">
            {!loadedImages.has(idx) && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--bg-elevated)' }}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--accent)' }}></div>
              </div>
            )}
            <img 
              src={img} 
              alt={`${title} screenshot ${idx + 1}`}
              className="w-full h-auto"
              loading="lazy"
              onLoad={() => handleImageLoad(idx)}
            />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToImage(idx)}
                className="w-2 h-2 rounded-full transition-all hover:scale-125"
                style={{ 
                  background: 'var(--accent)', 
                  opacity: currentIndex === idx ? 1 : 0.3 
                }}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
