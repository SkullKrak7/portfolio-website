export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ML' | 'Backend' | 'Full-Stack' | 'Hackathon';
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'rag-demo',
    title: 'RAG_Demo',
    description: 'Production-grade RAG with 96% test coverage (105 tests)',
    tags: ['Python', 'LangChain', '96% Coverage', '105 Tests'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/RAG_Demo',
    demo: 'https://rag-demo-skullkrak7.streamlit.app',
    featured: true,
  },
  {
    slug: 'cv-suite',
    title: 'Computer Vision Suite',
    description: 'Multi-language ML system - 5,200 LOC across 86 files',
    tags: ['Python', 'C++', 'React', '93% Coverage', '5.2K LOC'],
    category: 'Full-Stack',
    github: 'https://github.com/SkullKrak7/Computer-Vision-Classification-Suite',
    featured: true,
  },
  {
    slug: 'zaxia-backend',
    title: 'Zaxia Backend',
    description: 'Multi-tenant SaaS - 6,500 LOC production system',
    tags: ['FastAPI', 'CQRS', 'Kafka', 'K8s', '6.5K LOC'],
    category: 'Backend',
    github: 'https://github.com/SkullKrak7/zaxia-backend',
    featured: true,
  },
  {
    slug: 'retail-odyssey',
    title: 'Retail Odyssey',
    description: 'HackSheffield10 Winner - Best AI Agents on ARM',
    tags: ['🏆 Winner', 'Gemini', '5 Agents', 'Prometheus'],
    category: 'Hackathon',
    github: 'https://github.com/SkullKrak7/Retail-Odyssey',
  },
  {
    slug: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    description: 'XGBoost ML pipeline with 96.4% accuracy',
    tags: ['XGBoost', 'Flask', 'CI/CD', '96.4% Accuracy'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Predictive-Maintenance-Pipeline',
  },
  {
    slug: 'sheffaware',
    title: 'SheffAware',
    description: 'Sheffield AI Hackathon Winner - Overall Prize',
    tags: ['🏆 Winner', 'Python', 'Clustering', 'Plotly'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/SheffAware',
  },
  {
    slug: 'robotic-arm',
    title: 'Robotic Arm Control',
    description: 'Multi-modal control - 96.98% gesture accuracy',
    tags: ['MATLAB', '33-layer CNN', 'Arduino', '96.98% Accuracy'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Robotic-Arm-Control',
  },
  {
    slug: 'digital-twin',
    title: 'Digital Twin',
    description: 'Industrial monitoring dashboard',
    tags: ['Python', 'Dash', 'Plotly'],
    category: 'Full-Stack',
    github: 'https://github.com/SkullKrak7/Digital-Twin',
  },
  {
    slug: 'vision-sorting',
    title: 'Vision Sorting System',
    description: 'Real-time image classification',
    tags: ['PyTorch', 'OpenCV', 'Real-time'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/Vision-Sorting-System',
  },
  {
    slug: 'biodegradability',
    title: 'Biodegradability Classification',
    description: '4 ML models compared',
    tags: ['scikit-learn', 'XGBoost', 'Comparison'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/biodegradability-classification',
  },
  {
    slug: 'ocr-demo',
    title: 'OCR Text Demo',
    description: 'Simple OCR with Tesseract',
    tags: ['Python', 'Tesseract', 'OCR'],
    category: 'ML',
    github: 'https://github.com/SkullKrak7/ocr-text-demo',
  },
];
