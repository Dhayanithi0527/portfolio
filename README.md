# Modern React Portfolio

A high-performance, accessible, and aesthetically pleasing personal portfolio website built with Vite, React, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Lightning Fast**: Built with Vite for instant server start and lightning-fast HMR.
- 🎨 **Modern Design**: Clean, futuristic aesthetic with glassmorphism effects and smooth animations.
- 🌓 **Dark/Light Mode**: Fully responsive theme toggle with system preference support and persistence.
- 📱 **Mobile First**: Optimized for all devices from mobile to desktop.
- ♿ **Accessible**: Semantic HTML, keyboard navigation support, and high contrast text.
- 🚀 **SEO Optimized**: Meta tags and semantic structure for better search engine visibility.
- 📦 **Component Library**: Reusable UI primitives (Button, Card, Section, Container).

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (with `clsx` and `tailwind-merge`)
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` to deploy.
3. Follow the prompts.

### Build functionality

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # Primitive components (Button, Card, etc.)
│   ├── layout/     # Structural components (Navbar, Footer, Layout)
│   └── sections/   # Page specific sections (Hero, About, Projects)
├── hooks/          # Custom React hooks (useTheme)
├── pages/          # Route components (Home, Resume)
├── lib/            # Utilities and data (utils, data.js)
├── styles/         # Global styles
└── App.jsx         # Main application component with Routing
```

## Customization

- Update `src/lib/data.js` with your own projects and skills.
- Update `src/components/sections/` files to modify content layout.
- Customize colors in `tailwind.config.js` or `src/index.css`.

## License

MIT
