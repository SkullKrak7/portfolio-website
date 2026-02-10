export default function AboutPage() {
  return (
    <main className="min-h-screen py-8 lg:py-12" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>About Me</h1>
        
        {/* Who I Am - Full width for better readability */}
        <div className="rounded-lg shadow-md p-6 lg:p-8 mb-6" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Who I Am</h2>
          <p className="mb-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            MSc Robotics graduate from University of Sheffield specializing in Machine Learning, 
            Computer Vision, and NLP systems. Professional experience as ML Engineering Intern 
            with hands-on expertise training and optimizing deep learning models using Python, 
            PyTorch, and TensorFlow.
          </p>
          <p className="mb-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Two-time hackathon winner (HackSheffield10 - Best AI Agents on ARM, Sheffield AI Hackathon - Overall Winner) 
            with demonstrated technical depth and collaborative experience.
          </p>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            I build production-grade systems with comprehensive testing (96% coverage), monitoring, 
            and CI/CD pipelines. My approach combines deep technical knowledge with practical engineering.
          </p>
        </div>

        {/* Skills - 2-column grid on large screens */}
        <div className="rounded-lg shadow-md p-6 lg:p-8 mb-6" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                <span>🤖</span> ML & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'LangChain', 'TensorFlow', 'scikit-learn', 'OpenCV', 'ONNX', 'NLP', 'RAG'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                <span>⚙️</span> Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'SQL', 'FastAPI', 'Flask', 'Docker', 'Git', 'CI/CD', 'PostgreSQL', 'pandas', 'NumPy'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#a855f7' }}>
                <span>☁️</span> Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Prometheus', 'Grafana', 'CUDA', 'ChromaDB', 'Kubernetes'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }}>
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
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded text-sm" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education - 2-column grid */}
        <div className="rounded-lg shadow-md p-6 lg:p-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>MSc Robotics (Merit)</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>University of Sheffield</p>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>Sep 2023 – Sep 2024</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Dissertation: Robotic Arm Control Using Gesture and Speech Recognition 
                (96.98% and 95.03% accuracy)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>BTech Mechanical Engineering</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>GPA: 8.84/10</p>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>Vellore Institute of Technology | Jul 2019 – May 2023</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Dissertation: Surgical Collaborative Robot using Transformers and EfficientNet
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
