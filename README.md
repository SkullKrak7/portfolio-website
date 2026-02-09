# Portfolio Website - Sai Karthik Kagolanu

Modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- ✨ **Modern Design**: Clean, professional UI with smooth animations
- 🌓 **Dark Mode**: Full dark mode support with system preference detection
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Static site generation (SSG) for optimal performance
- 🎨 **Tailwind CSS v4**: Latest Tailwind with custom dark mode variant
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- ♿ **Accessible**: WCAG compliant with semantic HTML

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.18
- **Theme**: next-themes 0.4.6

## Project Structure

```
portfolio-website/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact form
│   ├── projects/       # Projects listing & detail pages
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles & Tailwind config
│   └── not-found.tsx   # 404 page
├── components/
│   ├── Header.tsx      # Navigation with dark mode toggle
│   ├── Footer.tsx      # Footer with social links
│   └── ProjectCard.tsx # Project card component
├── lib/
│   └── projects.ts     # Project data
└── public/
    └── resume.pdf      # Downloadable CV
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Development

### Adding Projects

Edit `lib/projects.ts` to add or modify projects:

```typescript
{
  slug: 'project-slug',
  title: 'Project Title',
  description: 'Short description',
  longDescription: 'Detailed description',
  tags: ['Python', 'React'],
  category: 'ML' | 'Backend' | 'Full-Stack' | 'Hackathon',
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  featured: true,
  stats: { loc: '1000', coverage: '95%' },
  highlights: ['Feature 1', 'Feature 2'],
  techStack: ['Tech 1', 'Tech 2']
}
```

### Dark Mode

Dark mode is implemented using:
- `next-themes` for theme management
- Tailwind CSS v4 custom variant: `@custom-variant dark (&:where(.dark, .dark *))`
- System preference detection with manual toggle

### Customization

1. **Colors**: Modify Tailwind color classes in components
2. **Content**: Update text in page components
3. **Resume**: Replace `public/resume.pdf` with your CV
4. **Contact**: Update email and social links in components

## Pages

- **Home** (`/`): Hero section, stats, featured projects
- **Projects** (`/projects`): All projects with tag filtering
- **Project Detail** (`/projects/[slug]`): Individual project pages
- **About** (`/about`): Education, skills, experience
- **Contact** (`/contact`): Contact form and social links
- **404**: Custom not found page

## Performance

- Static Site Generation (SSG) for all pages
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page loads and navigation

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site and deploy the `.next` folder:

```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

- **Email**: sai.kagolanu@yahoo.com
- **GitHub**: [@SkullKrak7](https://github.com/SkullKrak7)
- **LinkedIn**: [karthik-kagolanu](https://linkedin.com/in/karthik-kagolanu)
