# Pulse - Modern One-Page Portfolio & vCard Template

A professional, ThemeForest-ready portfolio and vCard template built with React, Vite, and Tailwind CSS. Features a smooth single-page experience with dedicated detail pages for services, portfolio items, and blog articles.

![Pulse Template](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Pulse+Portfolio+Template)

## Features

### Core Features
- ✨ **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- 🎨 **Light/Dark Theme**: Toggle with localStorage persistence and OS preference detection
- 📱 **Fully Responsive**: Mobile-first design with adaptive navigation
- ⚡ **Performance Optimized**: Lazy loading, code splitting, optimized builds
- ♿ **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- 🔍 **SEO Ready**: Meta tags, Open Graph, Twitter Cards
- 🎭 **Smooth Animations**: Framer Motion with reduced-motion support

### Sections
1. **Home** - Hero section with typer effect, social links, and metrics
2. **About** - Biography, skills bars, timeline (experience & education), testimonials slider
3. **Services** - Service cards with detail pages
4. **Portfolio** - Filterable project gallery with detail pages
5. **Blog** - Filterable article cards with dedicated article pages
6. **Contact** - Contact form with validation and contact information

### Additional Features
- 🎯 **Scrollspy Navigation**: Active section highlighting
- 🔄 **Smooth Scrolling**: Native smooth scroll with IntersectionObserver
- 📝 **Form Validation**: Client-side validation with helpful error messages
- 🎨 **Typer Effect**: Animated role/title display
- 🎠 **Testimonials Slider**: Keyboard-accessible carousel
- 🏷️ **Category Filtering**: For portfolio and blog sections
- 📱 **Mobile Menu**: Slide-out drawer navigation
- ⏳ **Preloader**: With timeout failsafe and reduced-motion support

## Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Quick Start

1. **Clone or download the template**
   ```bash
   # If using git
   git clone <your-repo-url>
   cd pulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder.

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Configuration

### 1. Personal Information

Edit [src/data/data.js](src/data/data.js) to customize your information:

```javascript
export const personalInfo = {
  name: 'Your Name',
  role: ['Role 1', 'Role 2', 'Role 3'], // Typer effect strings
  bio: 'Your bio text',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  avatar: 'path/to/your/image.jpg',
  socials: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'FaGithub' },
    // Add more social links
  ],
  metrics: [
    { label: 'Projects Completed', value: 100 },
    { label: 'Happy Clients', value: 50 },
    { label: 'Years Experience', value: 5 },
  ],
};
```

### 2. About Section

Update skills, experience, and education:

```javascript
export const aboutData = {
  description: 'Your about text...',
  skills: [
    { name: 'Skill Name', level: 90 }, // Level is 0-100
  ],
  experience: [
    {
      id: 1,
      type: 'work', // or 'education'
      title: 'Job Title',
      organization: 'Company Name',
      period: '2020 - Present',
      description: 'Job description...',
    },
  ],
};
```

### 3. Testimonials

Add or modify client testimonials:

```javascript
export const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Client Title',
    avatar: 'path/to/avatar.jpg',
    rating: 5,
    text: 'Testimonial text...',
  },
];
```

### 4. Services

Add your services:

```javascript
export const services = [
  {
    id: 'unique-service-id',
    title: 'Service Name',
    icon: 'FaIcon', // Font Awesome icon name
    description: 'Short description',
    fullDescription: 'Detailed description for service page',
    features: ['Feature 1', 'Feature 2'],
    technologies: ['Tech 1', 'Tech 2'],
    image: 'path/to/service-image.jpg',
  },
];
```

### 5. Portfolio

Add your projects:

```javascript
export const portfolio = [
  {
    id: 'unique-project-id',
    title: 'Project Name',
    category: 'Web Application', // Must match categories
    thumbnail: 'path/to/thumbnail.jpg',
    description: 'Short description',
    client: 'Client Name',
    year: '2024',
    technologies: ['React', 'Node.js'],
    images: ['image1.jpg', 'image2.jpg'],
    overview: 'Detailed project overview',
    challenges: ['Challenge 1', 'Challenge 2'],
    results: ['Result 1', 'Result 2'],
    link: 'https://project-url.com',
  },
];
```

### 6. Blog Posts

Add articles:

```javascript
export const blogPosts = [
  {
    id: 'unique-post-id',
    title: 'Article Title',
    category: 'Web Development',
    date: '2024-01-15',
    excerpt: 'Short excerpt...',
    image: 'path/to/article-image.jpg',
    readTime: '5 min read',
    content: `
# Article Title

Your article content in markdown-like format...
    `,
  },
];
```

### 7. Categories

Update filter categories:

```javascript
export const categories = {
  portfolio: ['All', 'Web Application', 'Mobile App', 'Design'],
  blog: ['All', 'Web Development', 'Design', 'Backend'],
};
```

## Customization

### Theme Colors

Edit [tailwind.config.js](tailwind.config.js) to change colors:

```javascript
colors: {
  primary: {
    // Your color palette
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Fonts

Fonts are loaded via Google Fonts in [src/index.css](src/index.css). To change:

1. Update the `@import` URL
2. Update `tailwind.config.js` font families

### Icons

The template uses React Icons (Font Awesome). Available icon names:
- Check [React Icons](https://react-icons.github.io/react-icons/) for all options
- Update icon names in data.js (e.g., 'FaCode', 'FaGithub')

### Contact Form

By default, the form uses `mailto:`. To use a custom endpoint:

Edit [src/components/sections/ContactSection.jsx](src/components/sections/ContactSection.jsx):

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

## SEO Configuration

Update meta tags in [index.html](index.html) and page-specific SEO in component files.

For dynamic SEO, use the SEO component:

```jsx
import SEO from './components/SEO';

<SEO
  title="Page Title"
  description="Page description"
  image="/path/to/image.jpg"
/>
```

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your Git repository
2. Vercel auto-detects Vite settings
3. Deploy

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

The template is optimized for performance:
- Lazy loading for images
- Code splitting with React Router
- Optimized Tailwind CSS (unused styles purged)
- Minified production builds
- Preload critical resources

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Reduced motion support

## Project Structure

```
pulse/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── sections/    # Page sections
│   │   ├── Sidebar.jsx
│   │   ├── Preloader.jsx
│   │   └── SEO.jsx
│   ├── context/         # React Context (Theme)
│   ├── data/            # Configuration and content data
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Details.jsx
│   │   └── BlogArticle.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## License

This template is licensed for use on ThemeForest. See LICENSE file for details.

## Support

For support, please contact: support@example.com

## Credits

- **Built with**: React, Vite, Tailwind CSS
- **Icons**: React Icons (Font Awesome)
- **Fonts**: Inter, Sora (Google Fonts)
- **Images**: Unsplash (demo images - replace with your own)

## Changelog

### Version 1.0.0 (2024-01-15)
- Initial release
- Single-page portfolio with 6 sections
- Service and portfolio detail pages
- Blog article pages
- Light/Dark theme
- Responsive design
- SEO optimization
- Accessibility features

---

Made with ❤️ for ThemeForest
