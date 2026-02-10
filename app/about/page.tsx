export default function AboutPage() {
  return (
    <main className="min-h-screen py-6 lg:py-8" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About Me</h1>
        
        {/* Who I Am - Compact */}
        <div className="rounded-lg shadow-md p-5 lg:p-6 mb-5" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Who I Am</h2>
          <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
            MSc Robotics graduate from University of Sheffield specializing in Machine Learning, 
            Computer Vision, and NLP systems. Professional experience as ML Engineering Intern 
            with hands-on expertise training and optimizing deep learning models using Python, 
            PyTorch, and TensorFlow.
          </p>
          <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
            Two-time hackathon winner (HackSheffield10 - Best AI Agents on ARM, Sheffield AI Hackathon - Overall Winner) 
            with demonstrated technical depth and collaborative experience.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            I build production-grade systems with comprehensive testing (96% coverage), monitoring, 
            and CI/CD pipelines. My approach combines deep technical knowledge with practical engineering.
          </p>
        </div>

        {/* Skills - Compact 2-column */}
        <div className="rounded-lg shadow-md p-5 lg:p-6 mb-5" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                <span>🤖</span> ML & AI
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'PyTorch', 'LangChain', 'TensorFlow', 'scikit-learn', 'OpenCV', 'ONNX', 'NLP', 'RAG'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded text-xs" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                <span>⚙️</span> Engineering
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['C++', 'SQL', 'FastAPI', 'Flask', 'Docker', 'Git', 'CI/CD', 'PostgreSQL', 'pandas', 'NumPy'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded text-xs" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#a855f7' }}>
                <span>☁️</span> Infrastructure
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['AWS', 'Prometheus', 'Grafana', 'CUDA', 'ChromaDB'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded text-xs" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#f97316' }}>
                <span>🎨</span> Frontend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded text-xs" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education - Compact 2-column */}
        <div className="rounded-lg shadow-md p-5 lg:p-6" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Education</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>MSc Robotics (Merit)</h3>
              <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>University of Sheffield | Sep 2023 – Sep 2024</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Dissertation: Robotic Arm Control Using Gesture and Speech Recognition 
                (96.98% and 95.03% accuracy)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>BTech Mechanical Engineering</h3>
              <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>VIT (GPA: 8.84/10) | Jul 2019 – May 2023</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Dissertation: Surgical Collaborative Robot using Transformers and EfficientNet
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
