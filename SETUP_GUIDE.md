# Complete Setup Guide

## 🚀 Quick Start

This portfolio website is production-ready and can be deployed in minutes!

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- PostCSS & Autoprefixer

### Step 2: Run Locally

```bash
npm run dev
```

Your portfolio will be available at: `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The included workflow will automatically deploy on every push

3. **Access your site**:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: Netlify

**Method A: Drag & Drop**
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! Your site is live

**Method B: Git Integration**
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy"

### Option 3: Vercel

**Method A: CLI**
```bash
npm i -g vercel
vercel
```

**Method B: Git Integration**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"

### Option 4: Other Hosts

You can deploy the `dist` folder to:
- Firebase Hosting
- AWS S3 + CloudFront
- Cloudflare Pages
- Surge.sh
- Render

All of these support static site hosting.

## 🎨 Customization

### Update Personal Information

1. **Contact Info**: Edit `src/data/translations.js`
   - Search for email, GitHub, LinkedIn
   - Update with your information

2. **Projects**: Edit `src/data/projectsData.js`
   - Add/remove projects
   - Update GitHub links
   - Add live demo links

3. **Skills**: Edit `src/data/skillsData.js`
   - Add/remove technologies
   - Organize by category

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these hex values to your preferred color
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Change Fonts

Edit the Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Then update font families in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui'],
  // ...
}
```

### Add More Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add translations in `src/data/translations.js`

## 🔧 Troubleshooting

### Issue: Styles not loading

**Solution**: Make sure Tailwind is properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Issue: Build fails

**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Blank page after deployment

**Solution**: Check that `base` in `vite.config.js` is set correctly:
- For GitHub Pages: `base: '/repository-name/'`
- For other hosts: `base: './'` or `base: '/'`

### Issue: Routing doesn't work

**Solution**: This is a single-page app with hash-based navigation. Make sure your deployment platform redirects all routes to `index.html`.

## 📱 Testing

### Test Responsiveness

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px, 390px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

### Test RTL Layout

1. Click the language toggle (AR/EN)
2. Verify:
   - Text direction changes
   - Layout mirrors correctly
   - Animations work properly

### Test Performance

Run Lighthouse audit:
1. Open DevTools
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Aim for 90+ scores

## 🎯 SEO Checklist

- [x] Semantic HTML tags
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Proper heading hierarchy
- [x] Alt text for images (if any)
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)
- [ ] Set up Google Analytics (optional)

## 📊 Analytics (Optional)

### Google Analytics

1. Get your tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🔐 Security

### Best Practices

- Never commit `.env` files with sensitive data
- Keep dependencies updated: `npm update`
- Use HTTPS for production deployments
- Enable security headers on your hosting platform

## 📄 File Structure Reference

```
omar-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── components/             # React components
│   ├── contexts/               # React contexts
│   ├── data/                   # Data & translations
│   ├── App.jsx                 # Main component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind config
├── vite.config.js              # Vite config
├── package.json                # Dependencies
├── netlify.toml                # Netlify config
├── vercel.json                 # Vercel config
├── README.md                   # Documentation
└── SETUP_GUIDE.md              # This file
```

## 💡 Tips

1. **Preview before deploying**: Always run `npm run build && npm run preview`
2. **Test both languages**: Check content in both English and Arabic
3. **Mobile-first**: Test on mobile devices first
4. **Performance**: Keep bundle size small (current: ~150KB)
5. **Accessibility**: Test with keyboard navigation

## 🆘 Need Help?

If you encounter any issues:

1. Check the [README.md](./README.md) file
2. Review Vite documentation: https://vitejs.dev
3. Check Tailwind CSS docs: https://tailwindcss.com
4. Review React documentation: https://react.dev

## ✅ Final Checklist

Before deploying:

- [ ] Updated all personal information
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Tested production build with `npm run preview`
- [ ] Tested both English and Arabic versions
- [ ] Tested on mobile, tablet, and desktop
- [ ] Checked all links work
- [ ] Verified contact information is correct
- [ ] Ran Lighthouse audit
- [ ] Set up custom domain (optional)

---

**Ready to deploy? Pick your hosting platform and follow the deployment guide above!**

Built with ❤️ by Omar Al-Saket
