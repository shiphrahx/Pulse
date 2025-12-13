# Quick Start Guide

Get your Pulse portfolio up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## 3. Customize Your Content

Open [src/data/data.js](src/data/data.js) and update:

### Personal Information
```javascript
export const personalInfo = {
  name: 'Your Name',              // Your full name
  role: ['Developer', 'Designer'], // Roles for typer effect
  bio: 'Your tagline',            // Short bio
  email: 'your@email.com',        // Contact email
  phone: '+1 234 567 8900',       // Phone number
  location: 'Your City',          // Location
  avatar: '/your-photo.jpg',      // Profile photo
  // ... socials and metrics
};
```

### Services
Add or modify your services:
```javascript
{
  id: 'my-service',                    // Unique ID for URL
  title: 'My Service',                 // Service name
  icon: 'FaCode',                      // Icon name from React Icons
  description: 'Short description',    // Card description
  fullDescription: 'Full details...',  // Detail page content
  features: ['Feature 1', 'Feature 2'],
  technologies: ['React', 'Node.js'],
  image: '/service-image.jpg',
}
```

### Portfolio Projects
```javascript
{
  id: 'my-project',                    // Unique ID for URL
  title: 'Project Name',
  category: 'Web Application',         // Must match a category
  thumbnail: '/thumb.jpg',
  images: ['/img1.jpg', '/img2.jpg'],  // Gallery images
  description: 'Short description',
  client: 'Client Name',
  year: '2024',
  technologies: ['React', 'Tailwind'],
  overview: 'Detailed overview...',
  challenges: ['Challenge 1'],
  results: ['Result 1'],
  link: 'https://example.com',
}
```

### Blog Posts
```javascript
{
  id: 'my-article',                    // Unique ID for URL
  title: 'Article Title',
  category: 'Web Development',
  date: '2024-01-15',
  excerpt: 'Short excerpt...',
  image: '/article-image.jpg',
  readTime: '5 min read',
  content: `
# Article Title

Your article content here...
  `,
}
```

## 4. Add Your Images

1. Place images in the `public` folder
2. Reference them as `/image-name.jpg` in your data
3. Or use external URLs (like Unsplash for demo)

## 5. Customize Theme Colors

Edit [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... your color palette
    600: '#0284c7',  // Main brand color
    // ...
  },
}
```

## 6. Build for Production

```bash
npm run build
```

Your production files will be in the `dist` folder.

## 7. Deploy

### Netlify
1. Push code to GitHub
2. Connect repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push code to GitHub
2. Import project on Vercel
3. Vercel auto-detects settings
4. Deploy!

### GitHub Pages
```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
});
```

Deploy:
```bash
npm run build
npm run deploy
```

## Common Tasks

### Change Fonts
1. Update Google Fonts import in [src/index.css](src/index.css)
2. Update font family in [tailwind.config.js](tailwind.config.js)

### Add New Service Icon
1. Find icon on [React Icons](https://react-icons.github.io/react-icons/)
2. Use the icon name (e.g., 'FaRocket')
3. Add to service data

### Connect Contact Form to Backend
Edit [src/components/sections/ContactSection.jsx](src/components/sections/ContactSection.jsx):

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const response = await fetch('YOUR_API_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    }
  } catch (error) {
    setStatus('error');
  }
};
```

### Update SEO Meta Tags
Edit [index.html](index.html) to change:
- Page title
- Meta description
- Open Graph tags
- Twitter Card tags

## Troubleshooting

**Build fails?**
- Run `npm install` again
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Images not showing?**
- Check file paths start with `/`
- Ensure images are in `public` folder
- Check console for 404 errors

**Theme toggle not working?**
- Check browser console for errors
- Ensure localStorage is enabled
- Try different browser

**Sections not scrolling smoothly?**
- Check that section IDs match navigation items
- Ensure JavaScript is enabled
- Test in different browser

## Need Help?

- Read the full [README.md](README.md)
- Check [FEATURES.md](FEATURES.md) for feature documentation
- Review [src/data/data.js](src/data/data.js) for data structure examples

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## Folder Structure Quick Reference

- `src/data/data.js` - **Edit this first!** All your content
- `src/components/sections/` - Individual page sections
- `src/pages/` - Main page layouts
- `public/` - Static assets (images, etc.)
- `tailwind.config.js` - Theme colors and styles
- `index.html` - SEO meta tags

## Tips for Success

1. **Start with content** - Update data.js before anything else
2. **Use real images** - Replace demo Unsplash URLs
3. **Test responsiveness** - Check mobile, tablet, desktop
4. **Optimize images** - Compress before upload
5. **Check accessibility** - Test with keyboard navigation
6. **Test in multiple browsers** - Chrome, Firefox, Safari
7. **Deploy early** - Get it live and iterate

---

Happy building! 🚀
