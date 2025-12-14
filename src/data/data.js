// Personal Information
export const personalInfo = {
  name: 'Alex Morgan',
  role: ['Full-Stack Developer', 'UI/UX Designer', 'Creative Thinker'],
  bio: 'Passionate about creating digital experiences that make a difference.',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'FaGithub' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'FaTwitter' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: 'FaDribbble' },
  ],
  metrics: [
    { label: 'Projects Completed', value: 127 },
    { label: 'Happy Clients', value: 84 },
    { label: 'Years Experience', value: 8 },
  ],
};

// About Section
export const aboutData = {
  description: `I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over 8 years of experience, I've had the privilege of working with startups and established companies to bring their visions to life.

My approach combines technical expertise with creative problem-solving. I believe that great design and clean code go hand in hand, and I'm committed to delivering solutions that not only look great but perform flawlessly.`,

  skills: [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Python & Django', level: 80 },
    { name: 'AWS & DevOps', level: 75 },
  ],

  experience: [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full-Stack Developer',
      organization: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Leading development of enterprise SaaS applications using React, Node.js, and AWS.',
    },
    {
      id: 2,
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Digital Agency Co.',
      period: '2018 - 2021',
      description: 'Built custom web applications and e-commerce solutions for diverse clients.',
    },
    {
      id: 3,
      type: 'education',
      title: 'M.S. Computer Science',
      organization: 'Stanford University',
      period: '2016 - 2018',
      description: 'Specialized in Human-Computer Interaction and Software Engineering.',
    },
    {
      id: 4,
      type: 'education',
      title: 'B.S. Computer Science',
      organization: 'UC Berkeley',
      period: '2012 - 2016',
      description: 'Focus on web technologies and user experience design.',
    },
  ],
};

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Working with Alex was an absolute pleasure. They delivered our project ahead of schedule and exceeded all expectations. The attention to detail and technical expertise is outstanding.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, TechFlow',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Alex has an incredible ability to understand complex requirements and translate them into elegant solutions. Our platform performance improved by 300% after their optimizations.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director, Design Studio',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: 'The best developer I\'ve worked with. Alex brings both technical skills and design sensibility to every project. Communication was excellent throughout the entire process.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Founder, EcommercePlus',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Our e-commerce platform is now faster, more secure, and converts better than ever. Alex\'s expertise in both frontend and backend development made all the difference.',
  },
];

// Services
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'FaCode',
    description: 'Custom web applications built with modern frameworks and best practices.',
    fullDescription: `I specialize in building high-performance web applications using cutting-edge technologies. Whether you need a simple landing page or a complex enterprise application, I deliver solutions that are scalable, maintainable, and user-friendly.

My development process emphasizes clean code, thorough testing, and continuous communication. I work closely with clients to ensure the final product exceeds expectations.`,
    features: [
      'React, Next.js, and Vue.js development',
      'RESTful and GraphQL API design',
      'Database architecture and optimization',
      'Authentication and security implementation',
      'Performance optimization and monitoring',
      'Responsive and accessible design',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'FaPaintBrush',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    fullDescription: `Great design is about more than aesthetics—it's about creating experiences that are intuitive, accessible, and delightful. I combine user research, visual design, and interaction design to create products that people love to use.

My design process is collaborative and iterative, ensuring that every decision is informed by user needs and business goals.`,
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Design system creation',
      'Usability testing and iteration',
      'Accessibility-first design',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    icon: 'FaMobile',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    fullDescription: `I build mobile applications that deliver native performance with modern development tools. Whether you need a consumer app or an enterprise solution, I create mobile experiences that are fast, reliable, and engaging.

From concept to deployment, I handle every aspect of mobile app development with attention to platform-specific guidelines and best practices.`,
    features: [
      'React Native development',
      'iOS and Android native development',
      'Offline-first architecture',
      'Push notifications and real-time updates',
      'App Store optimization and deployment',
      'Maintenance and updates',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    id: 'api-development',
    title: 'API Development',
    icon: 'FaServer',
    description: 'Robust, scalable backend systems and RESTful APIs.',
    fullDescription: `Strong backend infrastructure is the foundation of any successful application. I design and build APIs that are secure, performant, and easy to integrate with.

My backend solutions are built with scalability in mind, using industry best practices for security, data management, and system architecture.`,
    features: [
      'RESTful and GraphQL API design',
      'Microservices architecture',
      'Database design and optimization',
      'Authentication and authorization',
      'API documentation and testing',
      'Cloud deployment and scaling',
    ],
    technologies: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    icon: 'FaLightbulb',
    description: 'Strategic guidance for your technical projects and architecture.',
    fullDescription: `Sometimes you need expert advice to make the right technical decisions. I provide consulting services to help businesses navigate complex technology choices, optimize their development processes, and build better products.

With years of experience across different industries and technologies, I bring valuable insights to help your team succeed.`,
    features: [
      'Technology stack evaluation',
      'Architecture review and optimization',
      'Code review and best practices',
      'Team training and mentorship',
      'Project planning and estimation',
      'Performance audits',
    ],
    technologies: ['Various', 'Custom', 'As needed'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    icon: 'FaShoppingCart',
    description: 'Complete online stores with payment processing and inventory management.',
    fullDescription: `I build e-commerce platforms that convert visitors into customers. From custom shopping experiences to payment integration and inventory management, I create online stores that are secure, fast, and easy to manage.

My e-commerce solutions are designed to scale with your business and provide a seamless shopping experience across all devices.`,
    features: [
      'Custom storefront development',
      'Payment gateway integration',
      'Inventory management systems',
      'Order tracking and fulfillment',
      'Analytics and reporting',
      'SEO optimization',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'Headless CMS'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
  },
];

// Portfolio
export const portfolio = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'Web Application',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'A comprehensive financial analytics platform with real-time data visualization.',
    client: 'FinanceFlow Inc.',
    year: '2024',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    overview: `Built a sophisticated financial dashboard that processes and visualizes millions of transactions in real-time. The platform provides customizable analytics, automated reporting, and predictive insights for financial decision-making.

The project required handling complex data structures, implementing advanced charting capabilities, and ensuring bank-level security standards.`,
    challenges: [
      'Processing and visualizing large datasets without performance degradation',
      'Implementing real-time updates for market data',
      'Meeting strict security and compliance requirements',
    ],
    results: [
      '300% improvement in data processing speed',
      '95% reduction in report generation time',
      'Successfully handles 100K+ concurrent users',
    ],
    link: 'https://example.com',
  },
  {
    id: 'ecommerce-platform',
    title: 'Luxury E-Commerce Platform',
    category: 'E-Commerce',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    description: 'High-end fashion e-commerce site with personalized shopping experience.',
    client: 'LuxeFashion',
    year: '2023',
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
    ],
    overview: `Created a premium e-commerce experience for a luxury fashion brand. The platform features personalized product recommendations, virtual try-on capabilities, and a seamless checkout process.

Special attention was given to performance optimization, ensuring fast load times even with high-resolution product imagery.`,
    challenges: [
      'Optimizing large image assets for performance',
      'Implementing complex product variant management',
      'Creating a personalized shopping experience at scale',
    ],
    results: [
      '180% increase in conversion rate',
      '50% reduction in cart abandonment',
      'Average page load time under 2 seconds',
    ],
    link: 'https://example.com',
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    thumbnail: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    description: 'Cross-platform mobile app for workout tracking and nutrition planning.',
    client: 'FitLife Technologies',
    year: '2024',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    images: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop',
    ],
    overview: `Developed a comprehensive fitness app that helps users track workouts, plan nutrition, and achieve their health goals. The app integrates with popular fitness devices and provides AI-powered recommendations.

Built with offline-first architecture to ensure users can track workouts without internet connectivity.`,
    challenges: [
      'Integrating with multiple health tracking APIs',
      'Implementing offline data synchronization',
      'Creating engaging workout animations and timers',
    ],
    results: [
      '50K+ downloads in first month',
      '4.8 star rating on app stores',
      '85% 30-day user retention rate',
    ],
    link: 'https://example.com',
  },
  {
    id: 'saas-platform',
    title: 'Project Management SaaS',
    category: 'Web Application',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    description: 'Collaborative project management tool for distributed teams.',
    client: 'TeamSync',
    year: '2023',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'AWS'],
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&h=800&fit=crop',
    ],
    overview: `Built a full-featured project management platform that enables teams to collaborate in real-time. Features include task management, time tracking, file sharing, and integrated communication tools.

The platform supports organizations from small teams to enterprise clients with thousands of users.`,
    challenges: [
      'Implementing real-time collaboration features',
      'Scaling to support enterprise-level usage',
      'Creating flexible permission and role systems',
    ],
    results: [
      '1000+ organizations using the platform',
      '99.9% uptime over 12 months',
      'Processes 10M+ tasks monthly',
    ],
    link: 'https://example.com',
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking System',
    category: 'Web Application',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    description: 'Online reservation platform for restaurant chains.',
    client: 'DineEasy',
    year: '2023',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Twilio'],
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
    ],
    overview: `Created a comprehensive booking system that helps restaurants manage reservations, table assignments, and customer relationships. The platform includes SMS notifications, waitlist management, and analytics.

Integrated with popular POS systems for seamless operations.`,
    challenges: [
      'Handling concurrent booking requests',
      'Optimizing table assignment algorithms',
      'Integrating with various POS systems',
    ],
    results: [
      '250+ restaurants using the platform',
      '40% reduction in no-shows',
      '1M+ reservations processed',
    ],
    link: 'https://example.com',
  },
  {
    id: 'portfolio-mockup',
    title: 'Brand Identity System',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    description: 'Complete brand identity and design system for a tech startup.',
    client: 'InnovateTech',
    year: '2024',
    technologies: ['Figma', 'Adobe Illustrator', 'Design Tokens'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop',
    ],
    overview: `Developed a comprehensive brand identity system including logo design, color palette, typography, and component library. Created detailed guidelines for consistent brand application across all touchpoints.

The design system includes over 100 components and supports both light and dark themes.`,
    challenges: [
      'Creating a flexible yet consistent design system',
      'Balancing modern aesthetics with accessibility',
      'Ensuring scalability for future product lines',
    ],
    results: [
      'Complete design system with 100+ components',
      'Reduced design-to-development time by 60%',
      'Consistent brand experience across 15+ products',
    ],
    link: 'https://example.com',
  },
];

// Blog
export const blogPosts = [
  {
    id: 'react-best-practices-2024',
    title: 'React Best Practices in 2024',
    category: 'Web Development',
    date: '2024-01-15',
    excerpt: 'Exploring the latest patterns and practices for building scalable React applications in 2024.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    readTime: '8 min read',
    content: `
# React Best Practices in 2024

React continues to evolve, and with it, our best practices for building scalable applications. In this article, we'll explore the latest patterns and techniques that will help you write better React code.

## Server Components and RSC

React Server Components (RSC) represent a fundamental shift in how we think about React applications. They allow us to fetch data and render components on the server, reducing the amount of JavaScript sent to the client.

\`\`\`jsx
// Server Component
async function BlogPost({ id }) {
  const post = await fetchPost(id);
  return <Article post={post} />;
}
\`\`\`

## Concurrent Rendering

With React 18's concurrent features, we can now build more responsive UIs that remain interactive even during expensive operations.

## Performance Optimization

Modern React applications need to be fast. Here are some key strategies:

- Use React.memo() wisely for expensive components
- Implement code splitting with React.lazy()
- Optimize re-renders with useMemo and useCallback
- Consider using Suspense for better loading states

## State Management

The landscape of state management has matured. Choose the right tool for your needs:

- Local state for component-specific data
- Context for theme, auth, and global UI state
- External libraries (Zustand, Jotai) for complex app state
- Server state management with TanStack Query

## Conclusion

React development in 2024 is about making smart choices that balance developer experience with application performance. By following these best practices, you'll build applications that are maintainable, performant, and delightful to use.
    `,
  },
  {
    id: 'designing-accessible-interfaces',
    title: 'Designing Accessible Interfaces',
    category: 'Design',
    date: '2024-01-10',
    excerpt: 'A comprehensive guide to creating inclusive user experiences that work for everyone.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=500&fit=crop',
    readTime: '10 min read',
    content: `
# Designing Accessible Interfaces

Accessibility isn't just a nice-to-have—it's essential for creating inclusive digital experiences. Let's explore how to design interfaces that work for everyone.

## Understanding WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessible design. Focus on these principles:

- **Perceivable**: Information must be presentable to users in ways they can perceive
- **Operable**: UI components must be operable by all users
- **Understandable**: Information and operation must be understandable
- **Robust**: Content must be robust enough to work with assistive technologies

## Color and Contrast

Proper color contrast is crucial for readability:

- Maintain a contrast ratio of at least 4.5:1 for normal text
- Use 3:1 for large text and UI components
- Don't rely solely on color to convey information

## Keyboard Navigation

Every interactive element should be keyboard accessible:

- Ensure logical tab order
- Provide visible focus indicators
- Support keyboard shortcuts for power users
- Test with keyboard only—no mouse!

## Screen Reader Support

Make your content screen-reader friendly:

- Use semantic HTML elements
- Provide descriptive alt text for images
- Label form inputs properly
- Use ARIA attributes when needed

## Testing for Accessibility

Regular testing is essential:

- Use automated tools like Lighthouse and axe
- Test with actual screen readers
- Conduct user testing with people with disabilities
- Review your design with accessibility checklists

## Conclusion

Accessible design benefits everyone. By following these guidelines, you create experiences that are not only compliant but genuinely better for all users.
    `,
  },
  {
    id: 'nodejs-performance-optimization',
    title: 'Node.js Performance Optimization',
    category: 'Backend',
    date: '2024-01-05',
    excerpt: 'Techniques and strategies for building high-performance Node.js applications.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop',
    readTime: '12 min read',
    content: `
# Node.js Performance Optimization

Building fast Node.js applications requires understanding how to leverage its strengths and avoid common pitfalls. Here's your guide to Node.js performance optimization.

## Event Loop Mastery

The event loop is Node.js's superpower. Understanding it is crucial:

- Avoid blocking the event loop with CPU-intensive tasks
- Use worker threads for heavy computations
- Monitor event loop lag in production

## Efficient Database Access

Database queries are often the bottleneck:

\`\`\`javascript
// Bad: N+1 query problem
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ userId: user.id });
}

// Good: Eager loading
const users = await User.findAll({
  include: [Post]
});
\`\`\`

## Caching Strategies

Implement smart caching to reduce load:

- Use Redis for session storage and frequently accessed data
- Implement HTTP caching headers
- Cache at multiple levels (CDN, application, database)

## Memory Management

Prevent memory leaks and optimize usage:

- Monitor heap usage with Node.js profiling tools
- Use streams for large file processing
- Clean up event listeners and timers

## Clustering and Load Balancing

Scale your application horizontally:

- Use the cluster module to utilize all CPU cores
- Implement proper load balancing
- Consider using PM2 for process management

## Monitoring and Profiling

You can't optimize what you don't measure:

- Use APM tools like New Relic or DataDog
- Profile your application regularly
- Set up alerts for performance degradation

## Conclusion

Performance optimization is an ongoing process. Start with measuring, identify bottlenecks, optimize, and repeat. Your users will thank you for the improved experience.
    `,
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques',
    category: 'Web Development',
    date: '2023-12-28',
    excerpt: 'Exploring CSS Grid, Flexbox, custom properties, and other modern CSS features.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
    readTime: '7 min read',
    content: `
# Modern CSS Techniques

CSS has evolved tremendously in recent years. Let's explore modern techniques that make styling easier and more powerful.

## CSS Grid for Layouts

CSS Grid revolutionizes layout design:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
\`\`\`

## Custom Properties (CSS Variables)

Create maintainable, dynamic styles:

\`\`\`css
:root {
  --primary-color: #0ea5e9;
  --spacing-unit: 1rem;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
\`\`\`

## Container Queries

Style components based on their container size:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## Modern Selectors

Use powerful new selectors:

- :is() for grouping selectors
- :where() for zero-specificity styling
- :has() for parent selection

## Logical Properties

Write international-friendly CSS:

\`\`\`css
/* Instead of margin-left */
.element {
  margin-inline-start: 1rem;
}
\`\`\`

## Conclusion

Modern CSS is powerful and expressive. These techniques help you write cleaner, more maintainable stylesheets that work across different contexts and languages.
    `,
  },
  {
    id: 'building-scalable-apis',
    title: 'Building Scalable REST APIs',
    category: 'Backend',
    date: '2023-12-20',
    excerpt: 'Best practices for designing and implementing APIs that scale with your business.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    readTime: '15 min read',
    content: `
# Building Scalable REST APIs

Creating APIs that can handle growth requires careful planning and implementation. Here's how to build REST APIs that scale.

## API Design Principles

Start with solid design:

- Use RESTful conventions consistently
- Version your API from day one
- Design resource-oriented endpoints
- Document everything

## Authentication and Security

Security is non-negotiable:

\`\`\`javascript
// JWT-based authentication
app.use(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    req.user = await verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
\`\`\`

## Rate Limiting

Protect your API from abuse:

- Implement per-user rate limits
- Use sliding window algorithms
- Provide clear rate limit headers

## Pagination and Filtering

Handle large datasets efficiently:

\`\`\`javascript
GET /api/users?page=2&limit=20&sort=-createdAt&status=active
\`\`\`

## Error Handling

Consistent error responses:

\`\`\`javascript
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
\`\`\`

## Caching and Performance

Optimize response times:

- Implement HTTP caching (ETag, Cache-Control)
- Use Redis for frequently accessed data
- Consider GraphQL for complex data requirements

## Monitoring and Logging

Track API health:

- Log all requests and errors
- Monitor response times and error rates
- Set up alerts for anomalies

## Conclusion

Building scalable APIs requires attention to design, security, performance, and monitoring. These practices will help you create APIs that grow with your business.
    `,
  },
  {
    id: 'ux-design-principles',
    title: 'Essential UX Design Principles',
    category: 'Design',
    date: '2023-12-15',
    excerpt: 'Core principles every designer should know to create exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    readTime: '9 min read',
    content: `
# Essential UX Design Principles

Great user experiences don't happen by accident. They're the result of applying fundamental design principles. Let's explore the essentials.

## User-Centered Design

Always start with the user:

- Conduct user research and interviews
- Create user personas and journey maps
- Test with real users throughout the process
- Iterate based on feedback

## Clarity and Simplicity

Remove unnecessary complexity:

- Each screen should have one primary action
- Use clear, concise language
- Reduce cognitive load
- Progressive disclosure for advanced features

## Consistency

Build trust through consistency:

- Use established design patterns
- Maintain consistent terminology
- Apply consistent visual hierarchy
- Create and follow design systems

## Feedback and Response

Keep users informed:

- Provide immediate feedback for actions
- Show loading states for async operations
- Confirm destructive actions
- Celebrate successes

## Error Prevention and Recovery

Help users avoid and fix mistakes:

- Use constraints to prevent errors
- Provide clear error messages
- Offer undo functionality
- Suggest solutions, not just problems

## Accessibility

Design for everyone:

- Follow WCAG guidelines
- Test with assistive technologies
- Provide multiple ways to accomplish tasks
- Use inclusive language and imagery

## Mobile-First Thinking

Start with constraints:

- Design for small screens first
- Optimize for touch interactions
- Consider context of mobile use
- Progressive enhancement for larger screens

## Conclusion

These principles form the foundation of good UX design. Master them, and you'll create experiences that users find intuitive, efficient, and enjoyable.
    `,
  },
];

export const categories = {
  portfolio: ['All', 'Web Application', 'Mobile App', 'E-Commerce', 'Design'],
  blog: ['All', 'Web Development', 'Design', 'Backend'],
};
