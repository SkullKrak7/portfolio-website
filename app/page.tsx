import { projects } from '@/lib/projects'

export default function Home() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex flex-col justify-center flex-1" style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
            🚀 Available for opportunities
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Sai Karthik Kagolanu
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>
            ML Engineer & Full-Stack Developer
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto lg:mx-0" style={{ color: 'var(--text-secondary)' }}>
            MSc Robotics graduate with experience across AI agents, ML pipelines, and production backend systems. 
            Two-time hackathon winner building end-to-end data products (13 projects, comprehensive CI/CD + test coverage).
          </p>
          <div className="flex gap-2 md:gap-3 flex-wrap justify-center lg:justify-start">
            <a 
              href="/projects" 
              className="px-4 py-2 md:px-6 md:py-3 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
              style={{ background: 'var(--accent)' }}
            >
              View Projects →
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base"
              style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}>13</div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Projects</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#22c55e' }}>23%</div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Fewer Field Visits (Live Ops)</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#a855f7' }}>74%</div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>AI Agent Containment</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#f97316' }}>2x</div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Hackathon Winner</div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {projects.filter(p => p.featured).slice(0, 3).map((project) => (
            <div key={project.slug} className="group p-4 md:p-5 rounded-xl shadow hover:shadow-xl transition-all flex flex-col h-full" style={{ 
              background: 'radial-gradient(circle at top left, #111827 0%, var(--bg-elevated) 52%)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl">
                  {project.slug === 'zaxia' ? '🚀' : 
                   project.slug === 'industrial-intelligence-platform' ? '🏭' : 
                   project.slug === 'taa-society-treasurer' ? '🏢' : 
                   project.slug === 'retail-odyssey' ? '🏆' : '✨'}
                </div>
                <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
              </div>
              <p className="mb-3 text-xs md:text-sm flex-grow" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
              <div className="flex gap-1.5 mb-3 flex-wrap text-xs" style={{ color: 'var(--text-muted)' }}>
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded" style={{ 
                    background: tag === 'Live' ? 'rgba(34, 197, 94, 0.12)' : 
                                tag === '🏆 Winner' ? 'rgba(234, 179, 8, 0.12)' : 'var(--accent-soft)', 
                    color: tag === 'Live' ? 'var(--accent-success)' : 
                           tag === '🏆 Winner' ? 'var(--accent-warning)' : 'var(--accent)' 
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`/projects/${project.slug}`} className="text-xs md:text-sm font-medium hover:underline mt-auto" style={{ color: 'var(--accent)' }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}
