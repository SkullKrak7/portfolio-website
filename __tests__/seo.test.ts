import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'

describe('SEO Configuration', () => {
  describe('Sitemap', () => {
    it('generates sitemap with all pages', () => {
      const sitemapData = sitemap()
      
      expect(sitemapData).toBeDefined()
      expect(Array.isArray(sitemapData)).toBe(true)
      expect(sitemapData.length).toBeGreaterThan(0)
    })

    it('includes homepage in sitemap', () => {
      const sitemapData = sitemap()
      const homepage = sitemapData.find(entry => 
        entry.url === 'https://portfolio-website-iota-two-85.vercel.app' ||
        entry.url.endsWith('.app/')
      )
      
      expect(homepage).toBeDefined()
      expect(homepage?.priority).toBe(1)
    })

    it('includes all main pages', () => {
      const sitemapData = sitemap()
      const urls = sitemapData.map(entry => entry.url)
      
      expect(urls.some(url => url.includes('/about'))).toBe(true)
      expect(urls.some(url => url.includes('/projects'))).toBe(true)
      expect(urls.some(url => url.includes('/contact'))).toBe(true)
    })

    it('includes all project pages', () => {
      const sitemapData = sitemap()
      const projectUrls = sitemapData.filter(entry => entry.url.includes('/projects/'))
      
      expect(projectUrls.length).toBeGreaterThan(0)
    })

    it('has proper change frequency', () => {
      const sitemapData = sitemap()
      
      sitemapData.forEach(entry => {
        expect(['weekly', 'monthly']).toContain(entry.changeFrequency)
      })
    })

    it('has valid priorities', () => {
      const sitemapData = sitemap()
      
      sitemapData.forEach(entry => {
        expect(entry.priority).toBeGreaterThanOrEqual(0)
        expect(entry.priority).toBeLessThanOrEqual(1)
      })
    })
  })

  describe('Robots.txt', () => {
    it('generates robots.txt configuration', () => {
      const robotsData = robots()
      
      expect(robotsData).toBeDefined()
      expect(robotsData.rules).toBeDefined()
    })

    it('allows all user agents', () => {
      const robotsData = robots()
      
      expect(robotsData.rules.userAgent).toBe('*')
    })

    it('allows root path', () => {
      const robotsData = robots()
      
      expect(robotsData.rules.allow).toBe('/')
    })

    it('disallows api and next paths', () => {
      const robotsData = robots()
      
      expect(robotsData.rules.disallow).toContain('/api/')
      expect(robotsData.rules.disallow).toContain('/_next/')
    })

    it('includes sitemap URL', () => {
      const robotsData = robots()
      
      expect(robotsData.sitemap).toContain('sitemap.xml')
    })
  })
})
