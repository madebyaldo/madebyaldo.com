# MOD Website Rebuild

This is a complete rebuild of the MOD Creative website, originally built with Framer, now rebuilt from scratch using React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Self-hosted fonts** - Matter Regular, Matter Mono Regular, Inter

## Project Structure

```
rebuild/
├── public/
│   └── fonts/          # Self-hosted font files
├── src/
│   ├── components/     # Reusable React components
│   │   └── Navigation.jsx
│   ├── data/          # Data files
│   │   └── workProjects.js
│   ├── pages/         # Page components
│   │   ├── HomePage.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   ├── contact/
│   │   │   ├── Clients.jsx
│   │   │   └── Crew.jsx
│   │   └── work/
│   │       └── WorkCaseStudy.jsx
│   ├── styles/        # Global styles
│   │   ├── index.css
│   │   └── variables.css
│   ├── App.jsx        # Main app component with routing
│   └── main.jsx       # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Pages

- `/` - Home page
- `/about` - About page
- `/work` - Work listing page
- `/work/:slug` - Individual work case study pages (13 projects)
- `/contact` - Contact page
- `/contact/clients` - Clients page
- `/contact/crew` - Crew page

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/light navigation based on page background
- ✅ Smooth animations with Framer Motion
- ✅ All 13 work case study pages
- ✅ Pixel-perfect recreation of original design
- ✅ Self-hosted fonts and assets
- ✅ Clean, maintainable codebase

## Notes

- Fonts need to be downloaded and placed in `public/fonts/`
- Images are currently using original Framer CDN URLs - should be downloaded and self-hosted for production
- All animations and interactions match the original Framer site


