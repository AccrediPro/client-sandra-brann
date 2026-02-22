# Client Template Base — Health & Wellness Coach

A generic, professional website template for health and wellness coaches. Built with Astro v5, Tailwind CSS, and modern web technologies.

## Quick Start — New Client Setup

1. Copy this directory: `cp -r client-template-base client-<firstname>-<lastname>`
2. Open `src/config/siteConfig.ts` and replace `[FIRST]` and `[LAST]` with the client's name
3. Optionally update: email, phone, brand colors, services, bio
4. Run `npm install && npm run build` to verify
5. Deploy to Vercel

## Tech Stack

- **Astro v5** - Static-first framework
- **Tailwind CSS v3** - Utility-first styling
- **CVA** - Component variant management
- **AOS** - Scroll animations
- **Swiper** - Carousel component
- **Playwright** - End-to-end testing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your values
```

### Development

```bash
# Start dev server
npm run dev
# Opens at http://localhost:4321
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/           # Static assets
│   ├── images/       # Optimized images
│   ├── favicon.*     # Favicon files
│   └── robots.txt    # SEO robots file
├── src/
│   ├── components/   # Astro components
│   │   ├── forms/    # Form components
│   │   ├── layout/   # Header, Footer
│   │   ├── sections/ # Page sections
│   │   ├── seo/      # SEO components
│   │   └── ui/       # Reusable UI components
│   ├── config/       # Site configuration (siteConfig.ts)
│   ├── data/         # Static data (coach.json)
│   ├── layouts/      # Base layouts
│   ├── lib/          # Utilities
│   ├── pages/        # Route pages
│   └── styles/       # Global CSS
├── tests/            # Playwright tests
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── playwright.config.ts # Test configuration
```

## Pages

- **/** - Homepage with hero, about preview, services, testimonials, FAQ, CTA
- **/about** - Full story, certifications, differentiators
- **/services** - Service offerings and pricing info
- **/contact** - Contact form and email

## Deployment

The site is built as static HTML and can be deployed to any static hosting:

- Vercel (recommended)
- Netlify
- Cloudflare Pages

```bash
# Build and deploy to Vercel
vercel --prod
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SITE_URL` | Production URL for canonical links |
| `RESEND_API_KEY` | API key for email sending |
| `CONTACT_EMAIL` | Email address to receive contact form submissions |

## License

Private - All rights reserved.
