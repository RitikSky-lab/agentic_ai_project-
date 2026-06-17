# Portfolio Deployment Guide

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

---

## Local Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Ritik574-coder/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## Vercel Deployment (Recommended)

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click "Deploy"
6. Your site is live!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Click "Deploy"

---

## Custom Domain

1. Go to your Vercel project → Settings → Domains
2. Add your custom domain (e.g., `ritikkumar.dev`)
3. Update DNS records as instructed by Vercel
4. SSL certificate is auto-provisioned

---

## Environment Variables

No environment variables are required for the basic portfolio. If you add a contact form backend or analytics later:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact form
CONTACT_EMAIL=your-email@example.com
```

---

## GitHub Pages Deployment (Alternative)

If you prefer GitHub Pages:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build:
```bash
npm run build
```

3. The `out/` directory contains static files

4. Deploy using GitHub Actions or push to `gh-pages` branch

---

## Performance Optimization

The portfolio is optimized by default:

- **Static Generation**: Pages are pre-rendered at build time
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Use `next/image` for any images you add
- **Font Optimization**: Geist fonts are loaded via `next/font`
- **Bundle Analysis**: Run `npx @next/bundle-analyzer` to inspect bundle

---

## Updating Content

### Personal Information

Edit `src/lib/data.ts` to update:

- Projects
- Skills
- Certifications
- Blog posts
- Timeline events
- Contact information

### Styling

Edit `src/app/globals.css` to customize:

- Colors (CSS variables in `@theme inline`)
- Animations
- Custom utilities

### Adding Pages

Create new files in `src/app/` using the App Router convention:

```
src/app/
├── page.tsx          (Home)
├── layout.tsx        (Root Layout)
├── globals.css       (Global Styles)
└── about/
    └── page.tsx      (About page - if needed)
```

---

## SEO

The portfolio includes:

- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: `public/sitemap.xml`
- **Robots.txt**: `public/robots.txt`
- **PWA Support**: `public/site.webmanifest`

Update the URL in `sitemap.xml` and `layout.tsx` metadata to match your domain.

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Tailwind Styles Not Working

Tailwind v4 uses `@import "tailwindcss"` instead of the old config file. Make sure `globals.css` starts with:

```css
@import "tailwindcss";
```

### Framer Motion Issues

If animations don't work, ensure all components using Framer Motion have `"use client"` at the top.

---

## License

MIT License - Free to use and modify.
