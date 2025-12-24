# ⚡ Quick Start Guide

Get your portfolio up and running in 3 simple steps!

## Prerequisites

- **Node.js 16+** installed on your computer
  - Download from: https://nodejs.org
  - Check version: `node --version`

## Step 1: Install Dependencies

### On Mac/Linux:
```bash
chmod +x install.sh
./install.sh
```

### On Windows:
```bash
install.bat
```

### Manual Installation:
```bash
npm install
```

## Step 2: Run Locally

```bash
npm run dev
```

Open your browser and visit: **http://localhost:5173**

## Step 3: Deploy

### Quick Deploy Options:

**1. Netlify (Easiest)**
- Build: `npm run build`
- Drag `dist` folder to netlify.com/drop
- Done! ✅

**2. Vercel**
- Install: `npm i -g vercel`
- Run: `vercel`
- Follow prompts
- Done! ✅

**3. GitHub Pages**
- Push code to GitHub
- Go to Settings → Pages
- Select "GitHub Actions"
- Auto-deploys on every push! ✅

## Customization

### Update Your Info

1. **Personal Details**: 
   - File: `src/data/translations.js`
   - Change: Name, email, GitHub, LinkedIn

2. **Projects**: 
   - File: `src/data/projectsData.js`
   - Add your projects and links

3. **Skills**: 
   - File: `src/data/skillsData.js`
   - Update your tech stack

4. **Colors**: 
   - File: `tailwind.config.js`
   - Change primary colors

## Testing

### Test Both Languages
- Click AR/EN button in header
- Verify content displays correctly

### Test Responsive Design
- Press F12 to open DevTools
- Click device icon (Ctrl+Shift+M)
- Test mobile, tablet, desktop views

### Test Performance
- DevTools → Lighthouse → Generate Report
- Should score 90+ in all categories

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Need Help?

- **Full Documentation**: See [README.md](./README.md)
- **Detailed Setup**: See [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Issues**: Check the troubleshooting section

## File Structure

```
src/
├── components/       # All UI components
├── data/            # Your content here!
│   ├── translations.js   ← Edit your info
│   ├── skillsData.js     ← Edit your skills  
│   └── projectsData.js   ← Edit your projects
├── contexts/        # Language switching
└── index.css        # Global styles

tailwind.config.js   ← Change colors here
```

## Pro Tips 💡

1. **Always test locally first**: `npm run dev`
2. **Build before deploying**: `npm run build`
3. **Check both languages**: Switch between EN/AR
4. **Mobile-first testing**: Test on phone sizes first
5. **Update regularly**: Keep your projects fresh!

---

**Ready to impress? Deploy your portfolio now! 🚀**
