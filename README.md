# Jay Hoots — Consulting Website

A modern Next.js 14 consulting site built with TypeScript, Tailwind CSS, and the App Router.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)

## Project Structure

```
app/
  layout.tsx       # Root layout + metadata
  page.tsx         # Main page (composes all sections)
  globals.css      # Tailwind base + custom utilities

components/
  Nav.tsx          # Fixed top navigation
  Hero.tsx         # Hero section with headline + CTA
  WhyMe.tsx        # "What sets me apart" section
  Services.tsx     # Services offered
  TechStack.tsx    # Technology grid
  Experience.tsx   # Work history
  Stats.tsx        # Key metrics / numbers
  About.tsx        # Bio + aside cards
  Process.tsx      # How we work together
  Testimonials.tsx # Client testimonials (placeholder)
  Contact.tsx      # CTA / contact section
  Footer.tsx       # Site footer
```

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deploys on push.

## Customization

- Update content in each component file
- Replace testimonial placeholders with real quotes when you have them
- Add your photo to `/public/` and reference it in `About.tsx`
- Set up a real domain in Vercel or your host of choice
