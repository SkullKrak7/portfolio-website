import { projects } from '@/lib/projects'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
// HeroCanvas is a 'use client' island; its browser APIs run only in effects, so a
// direct import SSRs the empty <canvas> harmlessly (next/dynamic ssr:false is disallowed in Server Components).
import HeroCanvas from '@/components/HeroCanvas'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex flex-col justify-center flex-1" style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <HeroCanvas />
        <div className="relative z-10">
        <Reveal className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: 'var(--accent-success)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent-success)' }} />
            </span>
            Available for opportunities
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Sai Karthik Kagolanu
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: 'var(--text-secondary)' }}>
            AI & ML Engineer · Full-Stack Developer
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
        </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Reveal delay={0} className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}><CountUp value={13} /></div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Projects</div>
          </Reveal>
          <Reveal delay={80} className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent-success)' }}><CountUp value={23} suffix="%" /></div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Fewer Field Visits (Live Ops)</div>
          </Reveal>
          <Reveal delay={160} className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent-violet)' }}><CountUp value={74} suffix="%" /></div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>AI Agent Containment</div>
          </Reveal>
          <Reveal delay={240} className="p-4 md:p-6 rounded-xl shadow text-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--accent-orange)' }}><CountUp value={2} suffix="x" /></div>
            <div className="text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Hackathon Winner</div>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {projects.filter(p => p.featured).slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 120} className="group rounded-xl shadow hover:shadow-xl transition-all flex flex-col h-full overflow-hidden" style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-top"
                />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <p className="mb-3 text-xs md:text-sm flex-grow" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex gap-1.5 mb-3 flex-wrap text-xs" style={{ color: 'var(--text-muted)' }}>
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/projects/${project.slug}`} className="text-xs md:text-sm font-medium hover:underline mt-auto" style={{ color: 'var(--accent)' }}>
                  Learn more →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}
