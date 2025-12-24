# Project Structure

Complete overview of the portfolio website architecture.

## 📁 Directory Structure

```
omar-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD workflow
│
├── src/
│   ├── components/                 # React Components
│   │   ├── Header.jsx             # Navigation bar with language toggle
│   │   ├── Hero.jsx               # Landing section with CTA
│   │   ├── About.jsx              # About me, education, languages
│   │   ├── Skills.jsx             # Technical skills showcase
│   │   ├── Projects.jsx           # Featured projects portfolio
│   │   ├── Experience.jsx         # Work experience timeline
│   │   ├── Contact.jsx            # Contact information
│   │   └── Footer.jsx             # Footer with social links
│   │
│   ├── contexts/
│   │   └── LanguageContext.jsx   # Language state management (EN/AR)
│   │
│   ├── data/
│   │   ├── translations.js        # All text content (EN/AR)
│   │   ├── skillsData.js         # Technical skills by category
│   │   └── projectsData.js       # Project information
│   │
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles & Tailwind directives
│
├── index.html                     # HTML template with SEO meta tags
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.js                 # Vite build configuration
├── package.json                   # Dependencies & scripts
│
├── netlify.toml                   # Netlify deployment config
├── vercel.json                    # Vercel deployment config
│
├── .gitignore                     # Git ignore rules
├── .eslintrc.cjs                  # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── .editorconfig                  # Editor configuration
│
├── install.sh                     # Linux/Mac installation script
├── install.bat                    # Windows installation script
│
├── README.md                      # Project documentation
├── SETUP_GUIDE.md                 # Detailed setup instructions
├── QUICKSTART.md                  # Quick start guide
├── PROJECT_STRUCTURE.md           # This file
└── LICENSE                        # MIT License
```

## 🎨 Component Architecture

### Component Hierarchy

```
App
├── LanguageProvider (Context)
    ├── Header
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    ├── Experience
    ├── Contact
    └── Footer
```

### Component Responsibilities

| Component | Purpose | State | Context Used |
|-----------|---------|-------|--------------|
| **Header** | Navigation & language toggle | `scrolled`, `menuOpen` | Language |
| **Hero** | Landing hero section | None | Language |
| **About** | Professional story | None | Language |
| **Skills** | Technical skills grid | None | Language |
| **Projects** | Project showcase | None | Language |
| **Experience** | Work timeline | None | Language |
| **Contact** | Contact info & links | None | Language |
| **Footer** | Copyright & social links | None | Language |

## 🔄 Data Flow

```
translations.js ─┐
skillsData.js ───┼──> Components ──> useLanguage() ──> Rendered UI
projectsData.js ─┘
```

### Data Sources

1. **translations.js**
   - All UI text in English and Arabic
   - Structured by section
   - Easy to maintain and extend

2. **skillsData.js**
   - Categorized technical skills
   - Language-agnostic (displays in both languages)

3. **projectsData.js**
   - Project metadata (tech stack, links, status)
   - Descriptions come from translations.js

## 🎯 Key Features Implementation

### Bilingual Support

**Implementation**: React Context API
```javascript
LanguageContext
├── State: language (en/ar)
├── Toggle: toggleLanguage()
└── Effects: 
    ├── localStorage persistence
    ├── HTML lang attribute
    └── HTML dir attribute (LTR/RTL)
```

### Responsive Design

**Breakpoints** (Tailwind):
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

**Strategy**: Mobile-first approach

### Animations

**Types**:
- `fade-in`: Opacity transitions
- `slide-up`: Vertical entrance
- `slide-down`: Vertical entrance (inverted)
- `scale-in`: Scale transitions

**Implementation**: Tailwind custom animations in `tailwind.config.js`

### Navigation

**Type**: Smooth scroll to sections
**Method**: `scrollIntoView` with offset calculation
**Features**:
- Sticky header
- Active state tracking
- Mobile hamburger menu

## 🎨 Styling System

### Color Palette

```javascript
primary: {
  50-900: Blue gradient (primary actions)
}
dark: {
  50-950: Gray-blue gradient (backgrounds & text)
}
```

### Typography

- **Display**: Poppins (Headings)
- **Body**: Inter (English text)
- **Arabic**: Cairo (Arabic text)

### Component Classes

- `.btn-primary`: Primary action buttons
- `.btn-secondary`: Secondary action buttons
- `.card`: Content cards with hover effects
- `.skill-badge`: Skill tags
- `.gradient-text`: Gradient text effect
- `.nav-link`: Navigation links with underline animation

## 🚀 Build Process

### Development

```bash
npm run dev
```

1. Vite dev server starts
2. Hot Module Replacement (HMR) enabled
3. Fast refresh for React components
4. Instant CSS updates

### Production Build

```bash
npm run build
```

1. Vite bundles application
2. Code splitting & tree-shaking
3. Minification (JS, CSS, HTML)
4. Asset optimization
5. Output to `dist/` folder

**Typical Bundle Sizes**:
- JavaScript: ~80KB (gzipped)
- CSS: ~30KB (gzipped)
- Total: ~110KB (gzipped)

## 🔌 Plugin Architecture

### Vite Plugins

- `@vitejs/plugin-react`: React Fast Refresh

### PostCSS Plugins

- `tailwindcss`: Utility-first CSS
- `autoprefixer`: CSS vendor prefixing

## 📦 Dependencies

### Production

```json
{
  "react": "^18.3.1",          // UI library
  "react-dom": "^18.3.1"       // DOM renderer
}
```

### Development

```json
{
  "@vitejs/plugin-react": "^4.3.4",  // Vite React plugin
  "tailwindcss": "^3.4.17",          // CSS framework
  "postcss": "^8.4.49",              // CSS processor
  "autoprefixer": "^10.4.20",        // CSS prefixes
  "vite": "^6.0.3"                   // Build tool
}
```

## 🔐 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Build configuration |
| `tailwind.config.js` | Design system |
| `postcss.config.js` | CSS processing |
| `.eslintrc.cjs` | Code linting |
| `.prettierrc` | Code formatting |
| `.editorconfig` | Editor settings |

## 🌐 Deployment Configurations

| Platform | Config File | Build Command | Output Dir |
|----------|-------------|---------------|------------|
| **GitHub Pages** | `.github/workflows/deploy.yml` | `npm run build` | `dist` |
| **Netlify** | `netlify.toml` | `npm run build` | `dist` |
| **Vercel** | `vercel.json` | `npm run build` | `dist` |

## 📊 Performance Optimizations

1. **Code Splitting**: Automatic via Vite
2. **Tree Shaking**: Removes unused code
3. **CSS Purging**: Tailwind removes unused styles
4. **Lazy Loading**: Images load on scroll (if implemented)
5. **Minification**: JS, CSS, HTML compressed
6. **Caching**: Hashed filenames for cache busting

## 🧪 Testing Checklist

### Functional Tests
- [ ] All sections scroll correctly
- [ ] Language toggle works (EN ↔ AR)
- [ ] All links open correctly
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll on navigation

### Visual Tests
- [ ] Responsive on all breakpoints
- [ ] RTL layout correct in Arabic
- [ ] Animations smooth (60fps)
- [ ] No layout shifts
- [ ] Proper contrast ratios

### Performance Tests
- [ ] Lighthouse score 90+
- [ ] Load time < 2s
- [ ] Time to Interactive < 3s
- [ ] No console errors

## 🔄 Update Workflow

### Adding New Project

1. Add project to `src/data/projectsData.js`
2. Add translations to `src/data/translations.js`
3. Test both languages
4. Commit and deploy

### Changing Colors

1. Update `tailwind.config.js`
2. Test contrast ratios
3. Verify accessibility
4. Rebuild

### Adding New Section

1. Create component in `src/components/`
2. Add translations
3. Import in `App.jsx`
4. Add navigation link
5. Test thoroughly

## 📝 Code Style Guide

### React Components
- Use functional components
- Use hooks for state
- Props passed explicitly
- Semantic JSX

### CSS
- Tailwind utility classes
- Custom classes for reusable patterns
- Mobile-first responsive design

### File Naming
- Components: PascalCase (Header.jsx)
- Utilities: camelCase (utils.js)
- Data: camelCase (translations.js)

## 🎓 Learning Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **RTL Design**: https://rtlstyling.com

---

**This structure ensures maintainability, scalability, and performance! 🚀**
