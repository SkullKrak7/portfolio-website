import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '../components/ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'RAG Demo',
    description: 'Production-grade RAG with 96% test coverage',
    tags: ['Python', 'LangChain', 'ChromaDB'],
    slug: 'rag-demo',
  },
};

export const WithManyTags: Story = {
  args: {
    title: 'CV Suite',
    description: 'Multi-language ML system',
    tags: ['Python', 'C++', 'JavaScript'],
    slug: 'cv-suite',
  },
};

export const LongTags: Story = {
  args: {
    title: 'Complex Project',
    description: 'A project with many technologies',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL', 'Redis', 'Docker'],
    slug: 'complex',
  },
};
