export default function AboutPage() {
  const roadmap = [
    {
      date: 'Jan 2026 - Present',
      title: 'Full-Stack Developer & ML Engineer',
      subtitle: 'Independent Projects',
      content: 'Developing production-grade applications including Zaxia (multi-tenant backend with FastAPI & Kafka) and an Apartment Society Finance App (live Next.js & Supabase application).',
      icon: '🚀'
    },
    {
      date: 'Mar 2026 - Jun 2026',
      title: 'Operations Intern',
      subtitle: 'Fuse Energy | London, UK',
      content: 'Improved billing AI agent containment from 41% to 74% live in production. Scaled the test suite to 103 cases covering context drift. Deployed Metabase dashboards over ClickHouse, cutting unnecessary field visits by 23%.',
      icon: '⚡'
    },
    {
      date: 'Nov 2025 - Mar 2026',
      title: 'Advanced ML Systems Development',
      subtitle: 'Independent Projects',
      content: 'Built a Computer Vision Classification Suite in Python/C++ achieving 88.9% accuracy, alongside an enterprise-grade RAG system with hybrid retrieval and cross-encoder reranking.',
      icon: '👁️'
    },
    {
      date: '2025',
      title: 'Double Hackathon Winner',
      subtitle: 'HackSheffield10 & Sheffield AI Hackathon',
      content: 'Won Best Use of AI Agents on Arm for a 5-agent retail system built in 24 hours. Overall Winner for SheffAware, an urban livability clustering analysis tool using scikit-learn.',
      icon: '🏆'
    },
    {
      date: 'Sep 2023 - Sep 2024',
      title: 'MSc Robotics (Merit)',
      subtitle: 'University of Sheffield',
      content: 'Dissertation: Robotic Arm Control Using Gesture and Speech Recognition, achieving 96.98% gesture accuracy and 95.03% speech accuracy using custom CNN architectures.',
      icon: '🎓'
    },
    {
      date: 'Jun 2023 - Aug 2023',
      title: 'Machine Learning Intern',
      subtitle: 'Infyz Solutions | Hyderabad, India',
      content: 'Benchmarked ML models on 5,000+ samples, reaching 92% accuracy in production. Rewrote data preprocessing pipelines in pandas and NumPy, cutting training time by 40%.',
      icon: '🧠'
    },
    {
      date: 'Jul 2019 - May 2023',
      title: 'BTech Mechanical Engineering',
      subtitle: 'Vellore Institute of Technology (VIT)',
      content: 'Graduated with 8.84/10 (First Class). Dissertation: Surgical Collaborative Robot using Transformers and EfficientNet.',
      icon: '⚙️'
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
              <div key={index} className="relative pl-8 md:pl-10">
                <div 
                  className="absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md"
                  style={{ background: 'var(--bg-elevated)', border: '2px solid var(--accent)' }}
                >
                  {item.icon}
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
              </div>
            ))}
          </div>
        </div>

        {/* Skills - Compact 2-column */}
        <div className="rounded-lg shadow-md p-5 lg:p-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                <span>🤖</span> ML & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'MLflow', 'LangChain', 'pandas', 'OpenCV'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                <span>⚙️</span> Backend & Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'SQL', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Supabase', 'BigQuery'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#a855f7' }}>
                <span>☁️</span> Infrastructure & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'Cloudflare R2', 'dbt', 'Dagster', 'Prometheus', 'Grafana', 'GitHub Actions', 'Git'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#f97316' }}>
                <span>🎨</span> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript/TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Streamlit'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
