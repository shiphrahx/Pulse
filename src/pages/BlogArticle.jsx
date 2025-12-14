import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const post = blogPosts.find(p => p.id === id);

  const handleBlogClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'blog' } });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  useEffect(() => {
    if (!post) {
      navigate('/');
      return;
    }

    // Set page title
    document.title = `${post.title} - Pulse Blog`;

    // Scroll to top
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-style content to HTML-safe format
  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-display font-bold mt-8 mb-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-display font-bold mt-8 mb-4">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-display font-bold mt-6 mb-3">{line.substring(4)}</h3>;
      }

      // Code blocks
      if (line.startsWith('```')) {
        return null; // Handle separately if needed
      }

      // Lists
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2">
            {line.substring(2)}
          </li>
        );
      }

      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {parts.map((part, i) => (
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            ))}
          </p>
        );
      }

      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Regular paragraphs
      return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 card border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBlogClick}
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-outline rounded"
          >
            <FaArrowLeft />
            <span className="font-medium">Back to Blog</span>
          </button>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-outline"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Hero Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12 animate-slide-up">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold mb-6">
              <FaTag size={14} />
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="card p-8 lg:p-12 mb-12 animate-slide-up animate-delay-200">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </div>
          </div>

          {/* Share / Back CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-up animate-delay-400">
            <button
              onClick={handleBlogClick}
              className="btn btn-outline"
            >
              <FaArrowLeft />
              Back to Blog
            </button>

            <button
              onClick={handleContactClick}
              className="btn btn-primary"
            >
              Get in Touch
            </button>
          </div>

          {/* Related Articles (Optional - can be added later) */}
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;
