# Portfolio Website

Modern portfolio website showcasing 11 projects built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.18** - Styling
- **Node.js 24.13.0** - Runtime

## Features

- ✅ Responsive mobile-first design
- ✅ 11 projects with detailed pages
- ✅ Category filtering (ML, Backend, Full-Stack, Hackathon)
- ✅ GitHub and live demo links
- ✅ About page with skills
- ✅ Clean, minimal UI

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage with hero + featured projects
│   ├── globals.css         # Global styles + Tailwind
│   ├── projects/
│   │   ├── page.tsx        # Projects grid
│   │   └── [slug]/page.tsx # Dynamic project detail pages
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   └── ProjectCard.tsx     # Reusable project card
├── lib/
│   └── projects.ts         # Project data
└── public/projects/        # Project images (future)
```

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect GitHub repo to Vercel dashboard for automatic deployments.

## Next Steps

- [ ] Add project images
- [ ] Convert project READMEs to MDX
- [ ] Add contact form
- [ ] Add dark mode
- [ ] Add blog section
- [ ] Add analytics

## License

MIT
