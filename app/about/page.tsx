export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About Me</h1>
        
        <div className="rounded-lg shadow-md p-8 mb-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Who I Am</h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            MSc Robotics graduate from University of Sheffield specializing in Machine Learning, 
            Computer Vision, and NLP systems. Professional experience as ML Engineering Intern 
            with hands-on expertise training and optimizing deep learning models using Python, 
            PyTorch, and TensorFlow.
          </p>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Two-time hackathon winner (HackSheffield10 - Best AI Agents on ARM, Sheffield AI Hackathon - Overall Winner) 
            with demonstrated technical depth and collaborative experience.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            I build production-grade systems with comprehensive testing (96% coverage), monitoring, 
            and CI/CD pipelines. My approach combines deep technical knowledge with practical engineering.
          </p>
        </div>

        <div className="rounded-lg shadow-md p-8 mb-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>ML & AI</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'LangChain', 'TensorFlow', 'scikit-learn', 'OpenCV', 'ONNX', 'NLP', 'RAG'].map(skill => (
                <span key={skill} className="px-3 py-2 rounded text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {['C++', 'SQL', 'FastAPI', 'Flask', 'Docker', 'Git', 'CI/CD', 'PostgreSQL', 'pandas', 'NumPy'].map(skill => (
                <span key={skill} className="px-3 py-2 rounded text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Prometheus', 'Grafana', 'CUDA', 'ChromaDB', 'Kubernetes'].map(skill => (
                <span key={skill} className="px-3 py-2 rounded text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'].map(skill => (
                <span key={skill} className="px-3 py-2 rounded text-sm" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-8 mb-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>MSc Robotics (Merit)</h3>
            <p style={{ color: 'var(--text-muted)' }}>University of Sheffield | Sep 2023 – Sep 2024</p>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
              Dissertation: Robotic Arm Control Using Gesture and Speech Recognition 
              (96.98% and 95.03% accuracy)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>BTech Mechanical Engineering (GPA: 8.84/10)</h3>
            <p style={{ color: 'var(--text-muted)' }}>Vellore Institute of Technology | Jul 2019 – May 2023</p>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
              Dissertation: Surgical Collaborative Robot using Transformers and EfficientNet
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-8" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h2>
          <div className="space-y-3">
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">Location:</span> Sheffield, UK
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:sai.kagolanu@yahoo.com" className="hover:underline" style={{ color: 'var(--accent)' }}>
                sai.kagolanu@yahoo.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">Phone:</span> 07775 439150
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">GitHub:</span>{' '}
              <a href="https://github.com/SkullKrak7" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
                github.com/SkullKrak7
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://linkedin.com/in/karthik-kagolanu" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
                linkedin.com/in/karthik-kagolanu
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
