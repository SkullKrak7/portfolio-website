import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ImageCarousel from '@/components/ImageCarousel'

describe('ImageCarousel', () => {
  const mockImages = [
    '/projects/test-1.png',
    '/projects/test-2.png',
    '/projects/test-3.png'
  ]

  beforeEach(() => {
    // Mock scrollTo and querySelector
    Element.prototype.scrollTo = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: vi.fn()
    } as any))
  })

  it('renders all images', () => {
    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('alt', 'Test Project screenshot 1')
    expect(images[1]).toHaveAttribute('alt', 'Test Project screenshot 2')
    expect(images[2]).toHaveAttribute('alt', 'Test Project screenshot 3')
  })

  it('renders navigation dots for multiple images', () => {
    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const dots = screen.getAllByLabelText(/View image \d/)
    expect(dots).toHaveLength(3)
  })

  it('does not render navigation for single image', () => {
    render(<ImageCarousel images={['/projects/test-1.png']} title="Test Project" />)
    
    const dots = screen.queryAllByLabelText(/View image \d/)
    expect(dots).toHaveLength(0)
  })

  it('renders previous and next arrows', () => {
    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const prevButton = screen.getByLabelText('Previous image')
    const nextButton = screen.getByLabelText('Next image')
    
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('navigates to next image on next button click', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const nextButton = screen.getByLabelText('Next image')
    fireEvent.click(nextButton)
    
    expect(scrollToMock).toHaveBeenCalledWith({ left: 1000, behavior: 'smooth' })
  })

  it('navigates to previous image on previous button click', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const prevButton = screen.getByLabelText('Previous image')
    fireEvent.click(prevButton)
    
    // Should wrap to last image (index 2)
    expect(scrollToMock).toHaveBeenCalledWith({ left: 2000, behavior: 'smooth' })
  })

  it('navigates to specific image on dot click', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const dots = screen.getAllByLabelText(/View image \d/)
    fireEvent.click(dots[1])
    
    expect(scrollToMock).toHaveBeenCalledWith({ left: 1000, behavior: 'smooth' })
  })

  it('wraps around from last to first image', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const nextButton = screen.getByLabelText('Next image')
    
    // Click next 3 times: 0->1, 1->2, 2->0
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    
    expect(scrollToMock).toHaveBeenCalledTimes(3)
    expect(scrollToMock).toHaveBeenLastCalledWith({ left: 0, behavior: 'smooth' })
  })

  it('wraps around from first to last image', () => {
    const scrollToMock = vi.fn()
    document.querySelector = vi.fn(() => ({
      clientWidth: 1000,
      scrollTo: scrollToMock
    } as any))

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const prevButton = screen.getByLabelText('Previous image')
    fireEvent.click(prevButton)
    
    expect(scrollToMock).toHaveBeenCalledWith({ left: 2000, behavior: 'smooth' })
  })

  it('handles missing container gracefully', () => {
    document.querySelector = vi.fn(() => null)

    render(<ImageCarousel images={mockImages} title="Test Project" />)
    
    const nextButton = screen.getByLabelText('Next image')
    
    // Should not throw error
    expect(() => fireEvent.click(nextButton)).not.toThrow()
  })
})
