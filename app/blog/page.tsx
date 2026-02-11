import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Sai Karthik Kagolanu',
  description: 'Technical articles on Machine Learning, Computer Vision, and Production AI Systems',
}

export default function BlogPage() {
  const featured = blogPosts.filter(post => post.featured)
  const recent = blogPosts.slice(0, 6)

  return (
    <main className="min-h-screen py-8 lg:py-12" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Blog & Case Studies
        </h1>
        <p className="text-xl mb-12" style={{ color: 'var(--text-secondary)' }}>
          Technical deep-dives into ML systems, production deployments, and lessons learned
        </p>

        {/* Featured Posts */}
        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <article 
                  key={post.slug}
                  className="rounded-xl p-6 transition-all hover:scale-105"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded"
                        style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                    Coming Soon →
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>All Articles</h2>
          <div className="space-y-6">
            {recent.map((post) => (
              <article 
                key={post.slug}
                className="rounded-xl p-6 transition-all hover:translate-x-2"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>
                
                <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded"
                      style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            More articles coming soon! Follow my journey as I document production ML systems and lessons learned.
          </p>
        </div>
      </div>
    </main>
  )
}
