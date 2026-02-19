# Sunstone VC Landing Page

A modern, professional landing page for Sunstone Venture Capital fund, built with Next.js 16 and TypeScript.

## Features

- **Portfolio Showcase** - Interactive marquee gallery with 100+ portfolio companies
- **Rotating Events Gallery** - Bento grid layout with smooth crossfade transitions showcasing 37 event photos
- **Application Pages** - Dedicated pages for DTC vertical and founder perks programs
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Theme switching with next-themes
- **Performance Optimized** - Next.js Image optimization, lazy loading

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── apply/             # DTC vertical application page
│   ├── perks/             # Founder perks page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── events.tsx         # Rotating events gallery
│   ├── portfolio.tsx      # Portfolio marquee
│   └── ...
├── lib/                   # Utility functions
│   ├── events-utils.ts    # Event images data
│   ├── portfolio-utils.ts # Portfolio companies data
│   └── utils.ts           # Helper functions
├── data/                  # JSON data files
├── hooks/                 # Custom React hooks
├── public/                # Static assets
│   ├── images/            # Photos (events, DTC, team)
│   └── logos/             # Portfolio company logos
└── styles/                # Global styles
```

## Key Components

### Events Section
- Bento grid layout with 9-12 images visible at once
- Smooth 3-second crossfade transitions
- Rotates through 37 event photos every 30 seconds
- Dual-layer rendering for seamless transitions

### Portfolio Section
- Dual-row infinite marquee animation
- 100+ portfolio companies with logos
- Tilt card interactions on hover
- Pauses animation when hovering

### Application Pages
- DTC vertical focus: consumer brands
- Founder perks program details
- Full-bleed hero imagery
- Professional editorial layouts

## Contributing

This is a private project for Sunstone VC. For internal contributions:

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request for review

## License

Private - All rights reserved by Sunstone Venture Capital

---

Built with ❤️ for Sunstone VC
