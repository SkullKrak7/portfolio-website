export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'ML' | 'Backend' | 'Full-Stack' | 'Hackathon';
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
  images?: string[];
  stats?: {
    loc?: string;
    files?: string;
    coverage?: string;
    accuracy?: string;
  };
  highlights?: string[];
  techStack?: string[];
}

export function filterProjects(projects: Project[], filter: string): Project[] {
  if (filter === 'All') return projects;
  
  return projects.filter(p => {
    if (filter === 'ML/AI') {
      return p.category === 'ML' || p.tags.some(t => t.includes('XGBoost') || t.includes('CNN') || t.includes('LSTM'));
    }
    if (filter === 'Computer Vision') {
      return p.tags.some(t => t.includes('PyTorch') || t.includes('TensorFlow') || t.includes('CNN')) || p.title.includes('Vision');
    }
    if (filter === 'NLP') {
      return p.tags.some(t => t.includes('LangChain') || t.includes('Gemini')) || p.title.includes('RAG');
    }
    if (filter === 'Full-Stack') {
      return p.category === 'Full-Stack' || p.tags.some(t => t.includes('React') || t.includes('Flask') || t.includes('FastAPI'));
    }
    if (filter === 'Hackathon') {
      return p.category === 'Hackathon' || p.tags.includes('🏆 Winner');
    }
    return p.tags.some(t => t.includes(filter));
  });
}

export const projects: Project[] = [
  {
    slug: 'rag-demo',
    title: 'RAG Demo',
    description: 'Production-grade RAG with 96% test coverage (105 tests)',
    longDescription: 'Enterprise RAG system with hybrid retrieval (BM25 + vector search), cross-encoder reranking, streaming LLM responses, conversation memory, and sensor data integration for FSW defect analysis.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Streamlit'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/RAG-Demo',
    demo: 'https://rag-demo-skullkrak7.streamlit.app',
    image: '/projects/rag-demo.png',
    featured: true,
    stats: { loc: '1,370', files: '15', coverage: '96%' },
    highlights: [
      'Hybrid retrieval with BM25 + vector search',
      'Cross-encoder reranking for relevance',
      'Streaming responses with real-time UX',
      'Conversation memory (10-turn context)',
      'Sensor data integration for FSW monitoring',
      'RAGAS evaluation framework',
      'CI/CD with quality gates'
    ],
    techStack: ['Python', 'LangChain', 'ChromaDB', 'HuggingFace', 'Streamlit', 'Docker']
  },
  {
    slug: 'cv-suite',
    title: 'Computer Vision Suite',
    description: 'Multi-model ML system - 88.92% accuracy, 2,970 LOC',
    longDescription: 'Production-ready computer vision classification system with 4 trained models (TensorFlow MobileNetV2: 88.92%, PyTorch CNN: 87.28%, SVM: 78%, KNN: 72%). Real-time inference dashboard with live prediction history. Features 93% test coverage (51 tests), full monitoring stack, and comprehensive CI/CD.',
    tags: ['Python', 'C++', 'React', 'PyTorch', 'TensorFlow'],
    category: 'Full-Stack',
    github: 'https://github.com/SkullKrak7/Computer-Vision-Classification-Suite',
    image: '/projects/cv-suite.png',
    featured: true,
    stats: { loc: '2,970', files: '46', coverage: '93%', accuracy: '88.92%' },
    highlights: [
      'TensorFlow MobileNetV2: 88.92% accuracy (best)',
      'PyTorch CNN: 87.28% accuracy (production)',
      'Real-time inference dashboard',
      '93% test coverage with 51 tests',
      'Prometheus + Grafana monitoring',
      'Multi-language: Python + C++ + JavaScript',
      'Full CI/CD pipeline'
    ],
    techStack: ['Python', 'C++', 'React', 'PyTorch', 'TensorFlow', 'ONNX', 'FastAPI', 'Docker']
  },
  {
    slug: 'retail-odyssey',
    title: 'Retail Odyssey',
    description: 'HackSheffield10 Winner - Best AI Agents on ARM',
    longDescription: '5-agent AI system for Frasers Group retail assistant with Google Search grounding, competitor filtering, and comprehensive monitoring. Built in 24 hours.',
    tags: ['🏆 Winner', 'Gemini', 'AutoGen', 'React'],
    category: 'Hackathon',
    github: 'https://github.com/SkullKrak7/Retail-Odyssey',
    image: '/projects/retail-odyssey-1.png',
    images: ['/projects/retail-odyssey-1.png', '/projects/retail-odyssey-2.png', '/projects/retail-odyssey-3.png'],
    featured: true,
    stats: { loc: '1,472', files: '13' },
    highlights: [
      '5 specialized AI agents (Intent, Vision, Recommendation, Conversation, ImageGen)',
      'Google Search grounding with inline citations',
      'Competitor filtering (27 brands)',
      'Prometheus + Grafana monitoring',
      'React frontend with journey timeline',
      'ARM64 optimized',
      'Response time: 2.5-10s for full flow'
    ],
    techStack: ['Python', 'FastAPI', 'AutoGen', 'Gemini', 'React', 'Prometheus', 'Docker']
  },
  {
    slug: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    description: 'XGBoost ML pipeline with 96.4% accuracy',
    longDescription: 'Production ML pipeline for equipment failure prediction with XGBoost, Flask API, comprehensive monitoring, and CI/CD automation.',
    tags: ['XGBoost', 'Flask', 'CI/CD'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Predictive-Maintenance-Pipeline',
    image: '/projects/predictive-maintenance.png',
    stats: { loc: '455', files: '4', accuracy: '96.4%' },
    highlights: [
      'XGBoost with class imbalance handling',
      'Feature importance analysis',
      'Flask API with Pydantic validation',
      'Health check + metrics endpoints',
      'CI/CD with GitHub Actions',
      'Docker containerization'
    ],
    techStack: ['Python', 'XGBoost', 'Flask', 'Docker', 'GitHub Actions']
  },
  {
    slug: 'sheffaware',
    title: 'SheffAware',
    description: 'Sheffield AI Hackathon Winner - Overall Prize',
    longDescription: 'Urban livability analysis for Sheffield using 8 city features with K-means and hierarchical clustering. Interactive Plotly visualizations with ward-level insights.',
    tags: ['🏆 Winner', 'Python', 'Clustering', 'Plotly'],
    category: 'Hackathon',
    github: 'https://github.com/SkullKrak7/SheffAware',
    demo: 'https://sheffaware.streamlit.app',
    image: '/projects/sheffaware.png',
    stats: { loc: '445', files: '11' },
    highlights: [
      '8 urban features (trees, cameras, crossings, libraries, etc.)',
      'K-means + hierarchical clustering',
      'Interactive choropleth maps',
      'Real Sheffield City Council data',
      'Livability scoring system',
      'Ward-level aggregation'
    ],
    techStack: ['Python', 'scikit-learn', 'Plotly', 'Pandas', 'Streamlit']
  },
  {
    slug: 'robotic-arm',
    title: 'Robotic Arm Control',
    description: 'Multi-modal control - 96.98% gesture accuracy',
    longDescription: 'Multi-modal robotic arm control system with speech recognition (LSTM) and gesture recognition (33-layer CNN). Real-time Arduino integration for hardware control.',
    tags: ['MATLAB', '33-layer CNN', 'Arduino'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Robotic-Arm-Control',
    image: '/projects/robotic-arm-control-1.png',
    images: ['/projects/robotic-arm-control-1.png', '/projects/robotic-arm-control-2.png'],
    stats: { loc: '592', files: '6', accuracy: '96.98%' },
    highlights: [
      '33-layer CNN for gesture recognition',
      'LSTM network for speech recognition',
      'Multi-modal interface (speech + gesture)',
      'Real-time Arduino control',
      'Transfer learning from GoogLeNet',
      '6 commands: up, down, left, right, open, close'
    ],
    techStack: ['MATLAB', 'Deep Learning Toolbox', 'Arduino', 'Computer Vision']
  },
  {
    slug: 'digital-twin',
    title: 'Digital Twin',
    description: 'Industrial monitoring dashboard',
    longDescription: 'Industrial equipment monitoring system with PostgreSQL TimescaleDB, predictive maintenance ML model, and interactive Plotly dashboard.',
    tags: ['Python', 'Dash', 'Plotly', 'PostgreSQL'],
    category: 'Full-Stack',
    github: 'https://github.com/SkullKrak7/Digital-Twin',
    image: '/projects/digital-twin.png',
    stats: { loc: '428', files: '11' },
    highlights: [
      'PostgreSQL with TimescaleDB extension',
      'Random Forest predictive maintenance',
      'Interactive Plotly dashboard',
      'FastAPI REST API',
      'Docker Compose deployment',
      'Time-series sensor data'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Plotly', 'scikit-learn', 'Docker']
  },
  {
    slug: 'vision-sorting',
    title: 'Vision Sorting System',
    description: 'Real-time image classification',
    longDescription: 'Real-time computer vision sorting system with PyTorch CNN and KNN baseline. Webcam-based inference with FPS display.',
    tags: ['PyTorch', 'OpenCV', 'Real-time'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Vision-Sorting-System',
    image: '/projects/vision-sorting-system.png',
    stats: { loc: '268', files: '5' },
    highlights: [
      'PyTorch CNN (3 conv layers)',
      'Real-time webcam inference',
      'KNN baseline comparison',
      'Data collection tool',
      'FPS display',
      'Docker support'
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'scikit-learn']
  },
  {
    slug: 'biodegradability',
    title: 'Biodegradability Classification',
    description: '4 ML models compared',
    longDescription: 'Molecular biodegradability prediction comparing 4 ML algorithms (Random Forest, Logistic Regression, KNN, XGBoost) on 41 chemical features.',
    tags: ['scikit-learn', 'XGBoost', 'Comparison'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/biodegradability-classification',
    image: '/projects/biodegradability-classification.png',
    stats: { loc: '91', files: '1' },
    highlights: [
      '4 ML models compared',
      '41 molecular features',
      'Confusion matrix visualization',
      'Model comparison metrics',
      'Docker support'
    ],
    techStack: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'Seaborn']
  },
  {
    slug: 'ocr-demo',
    title: 'OCR Text Demo',
    description: 'Simple OCR with Tesseract',
    longDescription: 'Text extraction from images using Tesseract OCR with UTF-8 encoding support for special characters.',
    tags: ['Python', 'Tesseract', 'OCR'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/ocr-text-demo',
    stats: { loc: '19', files: '1' },
    highlights: [
      'Tesseract OCR integration',
      'UTF-8 encoding support',
      'File output',
      'Simple implementation'
    ],
    techStack: ['Python', 'Tesseract', 'Pillow']
  },
];
