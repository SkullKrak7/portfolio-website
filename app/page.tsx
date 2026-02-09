export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4">Sai Karthik Kagolanu</h1>
        <p className="text-2xl text-gray-600 mb-6">
          ML Engineer & Robotics Graduate
        </p>
        <p className="text-xl text-gray-500 max-w-2xl mb-8">
          MSc Robotics graduate specializing in Machine Learning, Computer Vision, and NLP systems. 
          Two-time hackathon winner with production-grade ML systems (6,500+ LOC, 96% test coverage).
        </p>
        <div className="flex gap-4">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>
          <a 
            href="/about" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            About Me
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* RAG_Demo */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">RAG_Demo</h3>
            <p className="text-gray-600 mb-4">
              Production-grade RAG with 96% test coverage
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">96% Coverage</span>
            </div>
            <a href="/projects/rag-demo" className="text-blue-600 hover:underline">
              Learn more →
            </a>
          </div>

          {/* CV Suite */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Computer Vision Suite</h3>
            <p className="text-gray-600 mb-4">
              Multi-language ML system (Python/C++/JS)
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">C++</span>
            </div>
            <a href="/projects/cv-suite" className="text-blue-600 hover:underline">
              Learn more →
            </a>
          </div>

          {/* Zaxia */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Zaxia Backend</h3>
            <p className="text-gray-600 mb-4">
              Multi-tenant SaaS with event-driven architecture
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">FastAPI</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">CQRS</span>
            </div>
            <a href="/projects/zaxia-backend" className="text-blue-600 hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
