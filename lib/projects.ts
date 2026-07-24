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

export const projects: Project[] = [
  {
    slug: 'axiar',
    title: 'Axiar',
    description: 'Full-stack, multi-tenant, event-driven field-service platform with an AI "Virtual COO"',
    longDescription:
      'Full-stack monorepo for an AI-powered field-service platform covering bookings, dispatch, field operations, payments, marketing, reviews, and analytics. Built as a multi-tenant, domain-driven, event-driven CQRS system — a FastAPI backend spanning 17 domain contexts and 117 API routes (PostgreSQL/PostGIS, Redis, Kafka, WebSockets, RBAC) with a React frontend wired to all 11 feature areas, plus a tool-calling "Virtual COO" AI assistant over live tenant data. Deployed as a keyless live demo on Vercel, Render, Neon, and Upstash.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'React'],
    category: 'Full-Stack',
    demo: 'https://axiar-alpha.vercel.app',
    featured: true,
    image: '/projects/axiar.png',
    stats: {
      coverage: '358 tests'
    },
    highlights: [
      'Multi-tenant architecture with request-scoped tenant context and sharding support',
      'CQRS design across 17 bounded contexts with 117 API routes',
      'Event-driven flow with a transactional outbox, Kafka, and degraded-mode resilience',
      'RBAC, OAuth, magic links, and WebSocket live dispatch tracking',
      'Tenant-scoped "Virtual COO" AI assistant with tool-calling over live tenant data',
      'Live keyless demo: Vercel + Render + Neon Postgres + Upstash Redis'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Redis', 'Kafka', 'Docker', 'LangChain', 'React', 'Vite', 'shadcn/ui', 'Zustand', 'Ollama', 'ChromaDB', 'Kubernetes']
  },
  {
    slug: 'industrial-intelligence-platform',
    title: 'Industrial Intelligence Platform',
    description: 'End-to-end MLOps platform combining a Digital Twin and predictive maintenance pipeline',
    longDescription: 'Merged portfolio project combining a Digital Twin simulation layer with a Predictive Maintenance ML pipeline into one production-grade repo. Covers telemetry simulation, feature engineering, model training, API serving, orchestration, and observability.',
    tags: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'dbt', 'DuckDB', 'Dagster', 'Docker'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/industrial-intelligence-platform',
    featured: true,
    image: '/projects/industrial-intelligence-platform.png',
    stats: { accuracy: '0.737 macro-F1', coverage: '9 tests' },
    highlights: [
      'Digital Twin simulation with asyncio telemetry streaming',
      'Predictive maintenance pipeline using XGBoost on AI4I 2020 data',
      'MLflow experiment tracking and model registry',
      'dbt feature engineering over three SQL model layers',
      'Five Dagster assets with daily orchestration',
      'Prometheus, Loki, Promtail, and Grafana observability',
      '10-service Docker Compose stack'
    ],
    techStack: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'dbt', 'DuckDB', 'Dagster', 'Docker']
  },
  {
    slug: 'trezia',
    title: 'Trezia',
    description: 'Multi-society accounting platform, live with real users — UPI/Razorpay payments and an AI books assistant',
    longDescription: 'Multi-society accounting and operations platform for apartment societies, born from replacing a 55-flat society\'s four-year Excel workflow and now live in daily use. Covers billing, dues tracking, PDF receipts, balance sheets, and an immutable audit trail, with a resident portal, one-tap UPI and WhatsApp payment links, per-society Razorpay online payments, OCR-assisted payment-proof approval, push notifications, staged CSV society import, bank-statement reconciliation, and a read-only AI assistant (Groq) for querying the books in plain English.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Finance App', 'Live'],
    category: 'Full-Stack',
    demo: 'https://trezia.dev',
    image: '/projects/trezia.png',
    featured: true,
    stats: { coverage: '424 tests' },
    highlights: [
      'Multi-society platform: one deployment, per-society data, config, and payment accounts',
      'Live and in daily use, with billing, dues tracking, and an immutable audit trail',
      'One-tap UPI and WhatsApp payment links, per-society Razorpay, and OCR-assisted payment-proof approval',
      'Resident portal with PDF receipts, balance sheets, push notifications, and CSV/JSON export',
      'Read-only AI assistant (Groq) to query the books in plain English',
      'MFA (TOTP), row-level security with a live RLS test gate, and staged society import'
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Cloudflare R2', 'Vercel']
},
  {
    slug: 'rag-demo',
    title: 'RAG Demo',
    description: 'Retrieval Augmented Generation with 96% test coverage (105 tests)',
    longDescription: 'Enterprise RAG system with hybrid retrieval (BM25 + vector search), cross-encoder reranking, streaming LLM responses, conversation memory, and sensor data integration for FSW defect analysis.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Streamlit'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/RAG_Demo',
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
    slug: 'cvc-suite',
    title: 'Computer Vision Classification Suite',
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
      '14,034 images across 6 classes',
      'C++ ONNX inference 2-3x faster than Python',
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
    tags: ['Winner', 'Gemini', 'AutoGen', 'React'],
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
    slug: 'sheffaware',
    title: 'SheffAware',
    description: 'Sheffield AI Hackathon Winner - Overall Prize',
    longDescription: 'Urban livability analysis for Sheffield using 8 city features with K-means and hierarchical clustering. Interactive Plotly visualizations with ward-level insights.',
    tags: ['Winner', 'Python', 'Clustering', 'Plotly'],
    category: 'Hackathon',
    github: 'https://github.com/SkullKrak7/SheffAware',
    demo: 'https://sheffaware.streamlit.app',
    image: '/projects/sheffaware.png',
    featured: true,
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
    slug: 'robotic-arm-control',
    title: 'Robotic Arm Control Using Gesture and Speech Recognition',
    description: 'MSc Robotics dissertation with 96.98% gesture accuracy and 95.03% speech accuracy',
    longDescription:
      'MSc Robotics dissertation project focused on gesture and speech-controlled robotic hand operation. Uses custom CNN architectures and hardware integration to connect vision and speech models to an Arduino-driven robotic hand.',
    tags: ['Robotics', 'MATLAB', 'CNN', 'Arduino', 'Computer Vision', 'Speech Recognition'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Robotic-Arm-Control',
    featured: true,
    image: '/projects/robotic-arm-control-1.png',
    images: [
      '/projects/robotic-arm-control-1.png',
      '/projects/robotic-arm-control-2.png'
    ],
    stats: {
      accuracy: '96.98%'
    },
    highlights: [
      '96.98% gesture accuracy',
      '95.03% speech accuracy',
      'Custom CNN architectures for both control modes',
      'Hardware integration with an Arduino-driven robotic hand',
      'MSc Robotics dissertation at the University of Sheffield',
      'Strong bridge between ML and embodied systems'
    ],
    techStack: ['MATLAB', 'Deep Learning', 'Arduino', 'Computer Vision', 'Speech Recognition', 'Robotics']
  },
    {
    slug: 'predictive-maintenance-pipeline',
    title: 'Predictive Maintenance Pipeline',
    description: 'XGBoost ML pipeline with 96.4% accuracy',
    longDescription: 'Production ML pipeline for equipment failure prediction with XGBoost, Flask API, comprehensive monitoring, and CI/CD automation.',
    tags: ['XGBoost', 'Flask', 'CI/CD'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Predictive-Maintenance-Pipeline',
    image: '/projects/predictive-maintenance.png',
    featured: false,
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
    slug: 'digital-twin',
    title: 'Digital Twin',
    description: 'Industrial monitoring dashboard',
    longDescription: 'Industrial equipment monitoring system with PostgreSQL TimescaleDB, predictive maintenance ML model, and interactive Plotly dashboard.',
    tags: ['Python', 'Dash', 'Plotly', 'PostgreSQL'],
    category: 'Full-Stack',
    github: 'https://github.com/SkullKrak7/Digital-Twin',
    image: '/projects/digital-twin.png',
    stats: { loc: '428', files: '11' },
    featured: false,
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
    slug: 'vision-sorting-system',
    title: 'Vision Sorting System',
    description: 'Real-time image classification',
    longDescription: 'Real-time computer vision sorting system with PyTorch CNN and KNN baseline. Webcam-based inference with FPS display.',
    tags: ['PyTorch', 'OpenCV', 'Real-time'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Vision-Sorting-System',
    image: '/projects/vision-sorting-system.png',
    stats: { loc: '268', files: '5' },
    featured: false,
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
    slug: 'biodegradability-classification',
    title: 'QSAR Biodegradability Classification',
    description: '4 ML models compared',
    longDescription: 'Molecular biodegradability prediction comparing 4 ML algorithms (Random Forest, Logistic Regression, KNN, XGBoost) on 41 chemical features.',
    tags: ['scikit-learn', 'XGBoost', 'Comparison'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/biodegradability-classification',
    image: '/projects/biodegradability-classification.png',
    stats: { loc: '91', files: '1' },
    featured: false,
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
    slug: 'ocr-text-demo',
    title: 'OCR Text Demo',
    description: 'Simple OCR with Tesseract',
    longDescription: 'Text extraction from images using Tesseract OCR with UTF-8 encoding support for special characters.',
    tags: ['Python', 'Tesseract', 'OCR'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/ocr-text-demo',
    image: '/projects/ocr_text_demo.png',
    stats: { loc: '19', files: '1' },
    featured: false,
    highlights: [
      'Tesseract OCR integration',
      'UTF-8 encoding support',
      'File output',
      'Simple implementation'
    ],
    techStack: ['Python', 'Tesseract', 'Pillow']
  },
];

export const featuredProjects = projects.filter(project => project.featured);
