# Omar Al-Saket - Portfolio Website

A premium, bilingual (Arabic/English) portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: Seamless switching between English and Arabic (RTL/LTR)
- **Modern Design**: Clean, minimal, and professional UI/UX
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Professional, subtle animations throughout
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Production Ready**: Clean, scalable code structure

## 📋 Sections

- **Home**: Eye-catching hero section with clear CTAs
- **About**: Professional story with education and language skills
- **Skills**: Categorized technical skills showcase
- **Projects**: Featured projects with detailed descriptions
- **Experience**: Professional timeline with achievements
- **Contact**: Easy-to-use contact information

## 🛠️ Tech Stack

- **React 18**: Latest React with Hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: Lightweight state management for language switching

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify's deploy interface, or:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## 📁 Project Structure

```
omar-portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── contexts/          # Context providers
│   │   └── LanguageContext.jsx
│   ├── data/              # Data files
│   │   ├── translations.js
│   │   ├── skillsData.js
│   │   └── projectsData.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Your primary colors */ },
  dark: { /* Your dark theme colors */ }
}
```

### Content

Update content in the following files:
- `src/data/translations.js` - All text content in both languages
- `src/data/skillsData.js` - Technical skills
- `src/data/projectsData.js` - Projects information

### Fonts

Current fonts are loaded from Google Fonts in `src/index.css`:
- Inter (body text)
- Poppins (headings)
- Cairo (Arabic text)

## 🌍 Language Support

The website automatically detects and saves the user's language preference in localStorage. The language can be toggled using the button in the header.

### RTL Support

Arabic language automatically applies RTL (right-to-left) layout with proper text alignment and direction.

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized bundle size
- Lazy loading where applicable
- Minimal dependencies
- Efficient animations

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Omar Al-Saket**
- Email: eng.omaralsaket@gmail.com
- GitHub: [@OmarAlsaakt](https://github.com/OmarAlsaakt)
- LinkedIn: [omaralsaket](https://linkedin.com/in/omaralsaket)

---

Built with ❤️ using React + Vite + Tailwind CSS
