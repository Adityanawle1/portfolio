# Aditya Nawle — Portfolio

Minimal editorial portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn-compatible structure.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** project structure (`components.json`, `@/components/ui`)
- **framer-motion** for `AnimatedTextCycle`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + design tokens
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # shadcn-compatible UI primitives
│   │   └── animated-text-cycle.tsx
│   ├── sections/        # Page sections
│   └── ...
└── lib/
    └── utils.ts         # cn() helper (shadcn standard)
```

## Why `/components/ui`?

shadcn/ui installs components into `components/ui` by default. Keeping this folder ensures:

- CLI commands like `npx shadcn@latest add button` work out of the box
- Consistent import paths (`@/components/ui/...`)
- Clear separation between reusable UI primitives and page-level components

## Animated Text Cycle

Used in the hero section:

```tsx
<AnimatedTextCycle
  words={["equity research", "portfolio drift", "hidden fees", ...]}
  interval={3200}
  className="text-foreground"
/>
```

## shadcn Setup (if starting fresh)

```bash
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --app --src-dir
cd my-portfolio
npx shadcn@latest init
npm install framer-motion
```

Then copy `animated-text-cycle.tsx` into `src/components/ui/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Legacy

The original static HTML version is preserved in `/legacy`.
