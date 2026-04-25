# Next.js Static Site

A modern static site built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## 🚀 Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.4 | React framework with App Router |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4 | Utility-first CSS |
| TypeScript | 5 | Type safety |
| pnpm | - | Package manager |

## 🛠️ Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production (static export)
pnpm start    # Serve production build
pnpm lint     # Run ESLint
pnpm test:ci  # Lint + build (CI pipeline)
```

## 🐳 Docker Deployment

```bash
docker compose up --build
```

The container uses **Nginx** to serve the static export.

## 📁 Project Structure

```
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── public/           # Static assets
├── compose.yml       # Docker Compose config
├── Dockerfile        # Container definition
├── nginx.conf        # Nginx configuration
└── next.config.ts    # Next.js config (static export)
```

## ⚙️ Configuration

- **Static Export**: Configured via `next.config.ts` → `output: "export"`
- **Images**: Unoptimized for static hosting compatibility
- **Styling**: Tailwind CSS 4 with PostCSS
