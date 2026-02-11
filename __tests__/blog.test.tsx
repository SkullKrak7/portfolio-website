import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BlogPage from '@/app/blog/page'

describe('Blog Page', () => {
  it('renders blog page title', () => {
    render(<BlogPage />)
    expect(screen.getByText('Blog & Case Studies')).toBeInTheDocument()
  })

  it('displays featured articles section', () => {
    render(<BlogPage />)
    expect(screen.getByText('Featured Articles')).toBeInTheDocument()
  })

  it('displays all articles section', () => {
    render(<BlogPage />)
    expect(screen.getByText('All Articles')).toBeInTheDocument()
  })

  it('shows blog post titles', () => {
    render(<BlogPage />)
    expect(screen.getAllByText(/Building a Production-Grade RAG System/i).length).toBeGreaterThan(0)
  })

  it('displays read time for posts', () => {
    render(<BlogPage />)
    expect(screen.getAllByText(/min read/i).length).toBeGreaterThan(0)
  })

  it('shows tags for posts', () => {
    render(<BlogPage />)
    expect(screen.getAllByText('RAG').length).toBeGreaterThan(0)
  })

  it('displays coming soon message', () => {
    render(<BlogPage />)
    expect(screen.getAllByText('Coming Soon →').length).toBeGreaterThan(0)
  })

  it('has proper page description', () => {
    render(<BlogPage />)
    expect(screen.getByText(/Technical deep-dives into ML systems/i)).toBeInTheDocument()
  })
})
