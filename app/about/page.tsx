export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            MSc Robotics graduate from University of Sheffield specializing in Machine Learning, 
            Computer Vision, and NLP systems. Professional experience as ML Engineering Intern 
            with hands-on expertise training and optimizing deep learning models using Python, 
            PyTorch, and TensorFlow.
          </p>
          <p className="text-gray-700 mb-4">
            Two-time hackathon winner (HackSheffield10 - Best AI Agents on ARM, Sheffield AI Hackathon - Overall Winner) 
            with demonstrated technical depth and collaborative experience.
          </p>
          <p className="text-gray-700">
            I build production-grade systems with comprehensive testing (96% coverage), monitoring, 
            and CI/CD pipelines. My approach combines deep technical knowledge with practical engineering.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ML & AI</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'LangChain', 'TensorFlow', 'scikit-learn', 'OpenCV', 'ONNX', 'NLP', 'RAG'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-green-100 text-green-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {['C++', 'SQL', 'FastAPI', 'Flask', 'Docker', 'Git', 'CI/CD', 'PostgreSQL', 'pandas', 'NumPy'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-blue-100 text-blue-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Prometheus', 'Grafana', 'CUDA', 'ChromaDB', 'Kubernetes'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-purple-100 text-purple-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-orange-100 text-orange-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">MSc Robotics (Merit)</h3>
            <p className="text-gray-600">University of Sheffield | Sep 2023 – Sep 2024</p>
            <p className="text-gray-700 mt-2">
              Dissertation: Robotic Arm Control Using Gesture and Speech Recognition 
              (96.98% and 95.03% accuracy)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">BTech Mechanical Engineering (GPA: 8.84/10)</h3>
            <p className="text-gray-600">Vellore Institute of Technology | Jul 2019 – May 2023</p>
            <p className="text-gray-700 mt-2">
              Dissertation: Surgical Collaborative Robot using Transformers and EfficientNet
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> Sheffield, UK
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:sai.kagolanu@yahoo.com" className="text-blue-600 hover:underline">
                sai.kagolanu@yahoo.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> 07775 439150
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">GitHub:</span>{' '}
              <a href="https://github.com/SkullKrak7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                github.com/SkullKrak7
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://linkedin.com/in/karthik-kagolanu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/karthik-kagolanu
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
