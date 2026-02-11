export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-production-rag-system',
    title: 'Building a Production-Grade RAG System with 96% Test Coverage',
    excerpt: 'Deep dive into building an enterprise RAG system with hybrid retrieval, cross-encoder reranking, and comprehensive testing. Learn how I achieved 96% test coverage and deployed to production.',
    date: '2026-02-04',
    readTime: '8 min read',
    tags: ['RAG', 'LangChain', 'Testing', 'Production'],
    featured: true
  },
  {
    slug: 'multi-agent-ai-hackathon-winner',
    title: 'Winning HackSheffield10 with Multi-Agent AI System',
    excerpt: 'How we built a 5-agent AI system for retail in 24 hours using Google Gemini, AutoGen, and ARM optimization. Lessons learned from building Retail Odyssey.',
    date: '2024-11-30',
    readTime: '6 min read',
    tags: ['Hackathon', 'Multi-Agent', 'Gemini', 'ARM'],
    featured: true
  },
  {
    slug: 'computer-vision-production-deployment',
    title: 'Deploying Computer Vision Models to Production',
    excerpt: 'From 88.92% accuracy to production deployment: A complete guide to building a multi-model CV system with PyTorch, TensorFlow, and comprehensive monitoring.',
    date: '2026-02-03',
    readTime: '10 min read',
    tags: ['Computer Vision', 'PyTorch', 'Production', 'Monitoring'],
    featured: true
  }
]
