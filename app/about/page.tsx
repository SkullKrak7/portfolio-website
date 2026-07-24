import Reveal from '@/components/Reveal'

export default function AboutPage() {
  const roadmap = [
    {
      date: 'Jan 2026 - Present',
      title: 'Full-Stack Developer & ML Engineer',
      subtitle: 'Independent Projects',
      content: 'Building production systems including Axiar (a multi-tenant, event-driven field-service platform on FastAPI & Kafka) and Trezia (a live Next.js & Supabase accounting product a 55-flat society runs its books on).'
    },
    {
      date: 'Mar 2026 - Jun 2026',
      title: 'Operations Intern',
      subtitle: 'Fuse Energy | London, UK',
      content: 'Improved billing AI agent containment from 41% to 74% live in production. Scaled the test suite to 103 cases covering context drift. Deployed Metabase dashboards over ClickHouse, cutting unnecessary field visits by 23%.'
    },
    {
      date: 'Nov 2025 - Mar 2026',
      title: 'Advanced ML Systems Development',
      subtitle: 'Independent Projects',
      content: 'Built a Computer Vision Classification Suite in Python/C++ achieving 88.9% accuracy, alongside an enterprise-grade RAG system with hybrid retrieval and cross-encoder reranking.'
    },
    {
      date: '2025',
      title: 'Double Hackathon Winner',
      subtitle: 'HackSheffield10 & Sheffield AI Hackathon',
      content: 'Won Best Use of AI Agents on Arm for a 5-agent retail system built in 24 hours. Overall Winner for SheffAware, an urban livability clustering analysis tool using scikit-learn.'
    },
    {
      date: 'Sep 2023 - Sep 2024',
      title: 'MSc Robotics (Merit)',
      subtitle: 'University of Sheffield',
      content: 'Dissertation: Robotic Arm Control Using Gesture and Speech Recognition, achieving 96.98% gesture accuracy and 95.03% speech accuracy using custom CNN architectures.'
    },
    {
      date: 'Jun 2023 - Aug 2023',
      title: 'Machine Learning Intern',
      subtitle: 'Infyz Solutions | Hyderabad, India',
      content: 'Benchmarked ML models on 5,000+ samples, reaching 92% accuracy in production. Rewrote data preprocessing pipelines in pandas and NumPy, cutting training time by 40%.'
    },
    {
      date: 'Jul 2019 - May 2023',
      title: 'BTech Mechanical Engineering',
      subtitle: 'Vellore Institute of Technology (VIT)',
      content: 'Graduated with 8.84/10 (First Class). Dissertation: Surgical Collaborative Robotic Arm.'
    }
  ];

  return (
    <main className="py-4 lg:py-6" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About Me</h1>
        
        {/* Journey Roadmap */}
        <div className="rounded-lg shadow-md p-5 lg:p-8 mb-6" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>My Journey</h2>
          
          <div className="relative border-l-2 ml-4 md:ml-6 space-y-8 pb-4" style={{ borderColor: 'var(--border-strong)' }}>
            {roadmap.map((item, index) => (
              <Reveal key={index} delay={index * 80} className="relative pl-8 md:pl-10">
                <div
                  className="absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                  style={{ background: 'var(--bg-elevated)', border: '2px solid var(--accent)' }}
                  aria-hidden="true"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent)' }} />
                </div>
                <div className="mb-1 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                  {item.subtitle}
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.content}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills - Compact 2-column */}
        <div className="rounded-lg shadow-md p-5 lg:p-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>
                ML & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'MLflow', 'LangChain', 'pandas', 'OpenCV'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent-success)' }}>
                Backend & Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'SQL', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Supabase', 'BigQuery'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'color-mix(in srgb, var(--accent-success) 14%, transparent)', color: 'var(--accent-success)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent-violet)' }}>
                Infrastructure & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'Cloudflare R2', 'dbt', 'Dagster', 'Prometheus', 'Grafana', 'GitHub Actions', 'Git'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'color-mix(in srgb, var(--accent-violet) 14%, transparent)', color: 'var(--accent-violet)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent-orange)' }}>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript/TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Streamlit'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'color-mix(in srgb, var(--accent-orange) 14%, transparent)', color: 'var(--accent-orange)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
