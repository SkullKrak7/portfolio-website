export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            Software Engineer and ML Specialist with a focus on building production-grade systems. 
            I don't just make things work—I understand every decision, the tradeoffs, and why it works.
          </p>
          <p className="text-gray-700">
            My approach combines deep technical knowledge with practical engineering, 
            from ML pipelines to distributed systems.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TypeScript', 'C++', 'JavaScript', 'MATLAB'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-blue-100 text-blue-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ML & AI</h3>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'TensorFlow', 'LangChain', 'scikit-learn', 'XGBoost', 'OpenCV'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-green-100 text-green-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Backend & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-purple-100 text-purple-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 py-2 bg-orange-100 text-orange-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">GitHub:</span>{' '}
              <a href="https://github.com/SkullKrak7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                github.com/SkullKrak7
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> [Add your email]
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">LinkedIn:</span> [Add your LinkedIn]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
