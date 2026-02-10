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
      <section className="container mx-auto px-4 py-4 lg:py-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              🚀 Available for opportunities
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Sai Karthik Kagolanu
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>
              ML Engineer & Robotics Graduate
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP systems. 
              Two-time hackathon winner with production-grade ML systems (17K+ LOC, 95%+ portfolio accuracy).
            </p>
            <div className="flex gap-2 md:gap-3 flex-wrap">
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

          {/* Stats Section - moved to hero on large screens */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}>10</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Projects</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#22c55e' }}>17K+</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Lines of Code</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#a855f7' }}>95%+</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Test Coverage</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#f97316' }}>2x</div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Hackathon Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-4 lg:py-6 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* RAG_Demo */}
          <div className="group p-4 md:p-5 rounded-xl shadow hover:shadow-xl transition-all" style={{ 
            background: 'radial-gradient(circle at top left, #111827 0%, var(--bg-elevated) 52%)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xl">🤖</div>
              <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>RAG Demo</h3>
            </div>
            <p className="mb-3 text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
              Production-grade RAG with 96% test coverage, hybrid retrieval, and conversation memory
            </p>
            <div className="flex gap-1.5 mb-3 flex-wrap text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="px-2 py-0.5 rounded" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>Python</span>
              <span className="px-2 py-0.5 rounded" style={{ background: 'rgba(34, 197, 94, 0.12)', color: 'var(--accent-success)' }}>96% Coverage</span>
            </div>
            <a href="/projects/rag-demo" className="text-xs md:text-sm font-medium hover:underline" style={{ color: 'var(--accent)' }}>
              Learn more →
            </a>
          </div>

          {/* CV Suite */}
          <div className="group p-4 md:p-5 rounded-xl shadow hover:shadow-xl transition-all" style={{ 
            background: 'radial-gradient(circle at top left, #111827 0%, var(--bg-elevated) 52%)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xl">👁️</div>
              <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>CV Suite</h3>
            </div>
            <p className="mb-3 text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
              Multi-language ML system with Python, C++, and JavaScript - 5,200 LOC
            </p>
            <div className="flex gap-1.5 mb-3 flex-wrap text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="px-2 py-0.5 rounded" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>Python</span>
              <span className="px-2 py-0.5 rounded" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }}>C++</span>
            </div>
            <a href="/projects/cv-suite" className="text-xs md:text-sm font-medium hover:underline" style={{ color: 'var(--accent)' }}>
              Learn more →
            </a>
          </div>

          {/* Retail Odyssey */}
          <div className="group p-4 md:p-5 rounded-xl shadow hover:shadow-xl transition-all" style={{ 
            background: 'radial-gradient(circle at top left, #111827 0%, var(--bg-elevated) 52%)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xl">🏆</div>
              <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Retail Odyssey</h3>
            </div>
            <p className="mb-3 text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
              HackSheffield10 Winner - 5-agent AI system built in 24 hours
            </p>
            <div className="flex gap-1.5 mb-3 flex-wrap text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="px-2 py-0.5 rounded" style={{ background: 'rgba(234, 179, 8, 0.12)', color: 'var(--accent-warning)' }}>Winner</span>
              <span className="px-2 py-0.5 rounded" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>Gemini</span>
            </div>
            <a href="/projects/retail-odyssey" className="text-xs md:text-sm font-medium hover:underline" style={{ color: 'var(--accent)' }}>
              Learn more →
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
