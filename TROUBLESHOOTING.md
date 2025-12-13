# Troubleshooting Guide

## Fixed: Blank Page Issue

**Problem**: Dev server showed a blank white page

**Cause**: The template was initially built with Tailwind CSS v4 (which has a different configuration system) but was later fixed by downgrading to the stable Tailwind CSS v3.

**Solution Applied**:
- Downgraded to Tailwind CSS v3.4.0
- Updated PostCSS configuration to use standard Tailwind plugin
- All Tailwind utility classes now work correctly

## Current Setup (Working)

```json
{
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

## Dev Server

The template is now fully functional:

```bash
npm run dev
```

Visit: `http://localhost:5173` (or the port shown in terminal)

## Build for Production

```bash
npm run build
```

Production files in `dist/` folder:
- index.html: 1.66 KB (gzipped: 0.63 KB)
- CSS: 22.85 KB (gzipped: 5.14 KB)
- JS: 310.77 KB (gzipped: 98.48 KB)

## Common Issues & Solutions

### 1. Port Already in Use

**Error**: `Port 5173 is in use`

**Solution**: Vite automatically uses the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

### 2. Tailwind Classes Not Working

**Symptoms**: Elements have no styling, everything looks plain HTML

**Solutions**:
- Ensure you're using Tailwind v3 (not v4)
- Check that `tailwind.config.js` exists and has correct content paths
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear cache: Delete `node_modules` and `package-lock.json`, then `npm install`

### 3. Images Not Loading

**Symptoms**: Broken image icons

**Solutions**:
- Place images in `public/` folder
- Reference them as `/image-name.jpg` (starting with /)
- External URLs (like Unsplash demo images) require internet connection
- Check browser console (F12) for 404 errors

### 4. Theme Toggle Not Working

**Symptoms**: Clicking theme toggle doesn't switch between light/dark

**Solutions**:
- Check browser console for JavaScript errors
- Ensure localStorage is enabled in your browser
- Try a different browser
- Check that the `dark` class is being added to `<html>` element (inspect with DevTools)

### 5. Build Fails

**Error**: Various build errors

**Solutions**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or on Windows
rmdir /s /q node_modules
del package-lock.json
npm install
```

### 6. Smooth Scrolling Not Working

**Symptoms**: Clicking navigation jumps instead of smooth scrolling

**Solutions**:
- Check that section IDs match navigation items (`home`, `about`, `services`, etc.)
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `scroll-behavior: smooth` in CSS (inspect element)

### 7. Form Submission Issues

**Symptoms**: Contact form doesn't send email

**Expected Behavior**: Default uses `mailto:` which opens the user's email client

**To Use Custom Backend**:
- Edit `src/components/sections/ContactSection.jsx`
- Replace the `handleSubmit` function with API call (see README.md)

### 8. Routing Issues (404 on Refresh)

**Symptoms**: Detail pages work when navigating from home, but refresh gives 404

**Solution**: This is normal for client-side routing. Configure your hosting:

**Netlify**: Add `_redirects` file to `public/`:
```
/*    /index.html   200
```

**Vercel**: Already handles this automatically

**Apache**: Add `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Development Tips

### Hot Module Replacement (HMR) Not Working

If changes don't reflect immediately:
1. Save the file (Ctrl+S / Cmd+S)
2. Check terminal for errors
3. Restart dev server if needed
4. Try hard refresh in browser (Ctrl+Shift+R / Cmd+Shift+R)

### Browser Console is Your Friend

Always check browser console (F12) for:
- JavaScript errors (red text)
- Network errors (Network tab)
- Component warnings

### Recommended Browser Extensions

- React DevTools
- Redux DevTools (if you add Redux)
- Tailwind CSS IntelliSense (VS Code)

## Need More Help?

1. Check the browser console for error messages
2. Review [README.md](README.md) for configuration details
3. Review [QUICKSTART.md](QUICKSTART.md) for setup steps
4. Search the error message online
5. Check [Vite documentation](https://vitejs.dev)
6. Check [Tailwind CSS v3 documentation](https://tailwindcss.com/docs)

## Verified Working Environment

The template has been tested and works with:
- Node.js v16+
- npm v7+
- Tailwind CSS v3.4.0
- React 18
- Vite 7.2.7

## Quick Reset

If everything breaks, start fresh:

```bash
# 1. Delete dependencies
rm -rf node_modules package-lock.json

# 2. Reinstall
npm install

# 3. Start dev server
npm run dev
```

---

**Last Updated**: 2024-12-13
**Status**: ✅ Fully Working
