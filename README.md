# Mariska Goebel - Certified Functional Medicine Coach

A professional website built with Astro v5, Tailwind CSS, and modern web technologies.

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

### Testing

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run specific test file
npx playwright test tests/pages.spec.ts
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
- AWS S3 + CloudFront

```bash
# Build and deploy to Vercel
vercel --prod
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SITE_URL` | Production URL for canonical links |
| `PHOENIX_API_URL` | API endpoint for contact form |
| `COACH_ID` | Coach identifier |

## License

Private - All rights reserved.
