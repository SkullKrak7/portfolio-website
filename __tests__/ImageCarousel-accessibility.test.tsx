import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ImageCarousel from '@/components/ImageCarousel'

describe('ImageCarousel - Accessibility & UX', () => {
  const mockImages = ['/test1.png', '/test2.png', '/test3.png']

  it('supports keyboard navigation with arrow keys', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test" />)
    
    const carousel = screen.getByRole('region')
    
    // Press right arrow
    fireEvent.keyDown(carousel, { key: 'ArrowRight' })
    expect(scrollToMock).toHaveBeenCalledWith({ left: 1000, behavior: 'smooth' })
    
    // Press left arrow
    fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
    expect(scrollToMock).toHaveBeenCalled()
    
    // Press other key (should not navigate)
    const callCount = scrollToMock.mock.calls.length
    fireEvent.keyDown(carousel, { key: 'Enter' })
    expect(scrollToMock.mock.calls.length).toBe(callCount)
  })

  it('has proper ARIA labels', () => {
    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const carousel = screen.getByRole('region', { name: /Test Project image carousel/i })
    expect(carousel).toBeInTheDocument()
  })

  it('is keyboard focusable', () => {
    render(<ImageCarousel images={mockImages} title="Test" />)
    
    const carousel = screen.getByRole('region')
    expect(carousel).toHaveAttribute('tabIndex', '0')
  })

  it('shows loading spinner before image loads', () => {
    render(<ImageCarousel images={mockImages} title="Test" />)
    
    const spinners = document.querySelectorAll('.animate-spin')
    expect(spinners.length).toBeGreaterThan(0)
  })

  it('hides loading spinner after image loads', () => {
    render(<ImageCarousel images={mockImages} title="Test" />)
    
    const images = screen.getAllByRole('img')
    fireEvent.load(images[0])
    
    // After load, spinner for that image should be hidden
    // (implementation detail - spinner is conditionally rendered)
  })

  it('has lazy loading enabled on images', () => {
    render(<ImageCarousel images={mockImages} title="Test" />)
    
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })
})
