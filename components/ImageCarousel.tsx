'use client'

import { useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  title: string
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToImage = (index: number) => {
    setCurrentIndex(index)
    const container = document.querySelector('.carousel-container')
    const width = container?.clientWidth || 0
    container?.scrollTo({ left: width * index, behavior: 'smooth' })
  }

  return (
    <div className="mb-8 relative">
      <div className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide">
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-center rounded-xl overflow-hidden shadow-lg">
            <img 
              src={img} 
              alt={`${title} screenshot ${idx + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
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
      )}
    </div>
  )
}
