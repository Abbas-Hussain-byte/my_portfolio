#My Portfolio

A performance-focused developer portfolio built with the MERN stack, applying Formula 1 engineering principles to web development: constraint-driven, telemetry-informed, relentlessly tuned.

## 🎯 Design Philosophy

This portfolio applies F1 pit wall telemetry aesthetics to showcase engineering work:
- **High information density** with clean hierarchy
- **Technical typography** (Inter + JetBrains Mono)
- **Dark theme** with precise data visualization colors
- **Mechanical motion** (120ms transitions, no bounce effects)
- **Performance-first** (target: Lighthouse 80+ mobile)

## ✨ Features

- Clean, engineering-focused homepage
- Project showcase with constraint → strategy → impact format
- Detailed project pages with metrics and architecture
- F1-inspired  HUD design system
- Fully responsive
- Performance-optimized (lazy loading, WebP images)
- Accessibility-focused (semantic HTML, keyboard navigation)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + Vite |
| **Routing** | React Router DOM v6 |
| **Styling** | Vanilla CSS with CSS Variables |
| **Icons** | Lucide React |
| **Hosting** | Netlify / Vercel (free tier) |

### Why No Backend (Currently)

This portfolio uses **static project data** (JSON file) instead of MongoDB to keep deployment simple. You can easily add a backend later if you want dynamic project management.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd portfolio/client

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Built files will be in `dist/` folder.

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navigation.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── Contact.jsx
│   ├── data/            # Project data (JSON)
│   │   └── projects.js
│   ├── styles/          # CSS styles
│   │   └── global.css   # F1 design system
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization Guide

### 1. Update Personal Information

**File: `client/src/pages/Home.jsx`**
- Replace "YOUR NAME" with your actual name
- Update the "CURRENTLY" and "PREVIOUSLY" sections

**File: `client/src/components/Navigation.jsx`**
- Line 11: Change `YOUR.NAME` to your name/brand

**File: `client/index.html`**
- Line 7: Update the `<title>` tag with your name

### 2. Add Your Projects

**File: `client/src/data/projects.js`**

Replace the sample projects with your own. Format:

```javascript
{
  slug: 'project-url-slug',
  name: 'project-name',
  constraint: 'The problem you solved',
  strategy: 'Your technical approach',
  stack: ['Tech1', 'Tech2', 'Tech3'],
  impact: 'Measurable outcome',
  metrics: {
    metricName: 'value',
    anotherMetric: 'value'
  },
  status: 'LIVE',  // or 'IN PROGRESS' or 'ARCHIVED'
  links: {
    github: 'https://github.com/...',
    demo: 'https://...',
    detail: '/projects/slug'
  },
  description: `Full markdown description...`
}
```

### 3. Update Contact Information

**File: `client/src/pages/Contact.jsx`**
- Line 35: Update email address
- Line 50: Update GitHub URL
- Line 66: Update LinkedIn URL
- Line 82: Update resume link (place your `resume.pdf` in `client/public/`)

### 4. Customize Colors (Optional)

**File: `client/src/styles/global.css`**

Edit CSS variables (lines 12-35):

```css
--accent-primary: #00d9ff;    /* Cyan - links, CTAs */
--accent-success: #00ff88;    /* Green - success states */
--accent-warning: #ffb800;    /* Amber - warnings */
--accent-critical: #ff3860;   /* Red - errors */
--accent-highlight: #9d4eff;  /* Purple - highlights */
```

## 🔧 Future Enhancements (Optional)

### Add MongoDB Backend

If you want to manage projects dynamically:

1. Create Express backend in `/server` folder
2. Connect to MongoDB Atlas (free tier)
3. Create a simple admin panel to add/edit projects
4. Update frontend to fetch from API instead of JSON

**See `implementation_plan.md` for detailed backend setup instructions.**

### Add 3D Elements

For subtle 3D hero background:

```bash
npm install three @react-three/fiber
```

See strategy document for guidelines on performance-friendly 3D implementation.

## 📊 Performance Checklist

Before deploying, verify:

- [ ] Run Lighthouse audit (target: 80+ mobile)
- [ ] Images compressed (use WebP format)
- [ ] Fonts self-hosted (from `public/fonts/`)
- [ ] No console errors
- [ ] Test on mobile device
- [ ] Update meta tags in `index.html`

## 🎯 API Keys Required

### Currently: NONE ✅

This portfolio is 100% free and requires no API keys or paid services.

### If Adding MongoDB Backend (Optional)

You'll need a **MongoDB Atlas connection string**:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create free cluster (M0 tier, 512MB)
3. Click "Connect" → "Connect your application"
4. Copy connection string
5. Add to `server/.env` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio
   PORT=5000
   ```

## 📝 License

MIT License - feel free to use this template for your own portfolio.

## 🚀 Quick Start Summary

```bash
# 1. Clone/download this project
# 2. Navigate to client folder
cd portfolio/client

# 3. Install dependencies
npm install

# 4. Customize content (see Customization Guide above)
# 5. Start dev server
npm run dev

# 6. Build for production
npm run build

# 7. Deploy to Netlify/Vercel
```

---

**Built with F1 engineering precision. Optimized for performance, clarity, and impact.**
