import { useEffect } from 'react';

const SEO = ({
  title = 'Pulse - Modern One-Page Portfolio & vCard Template',
  description = 'Professional portfolio and vCard template showcasing work, skills, and expertise. Built with React, Tailwind CSS, and modern web technologies.',
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website',
}) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);

    // Open Graph meta tags
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:image', image, 'property');
    setMetaTag('og:url', url, 'property');
    setMetaTag('og:type', type, 'property');

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Additional SEO tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Pulse Template');
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
