import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa';
import { blogPosts, categories } from '../../data/data';

const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = activeFilter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Insights and articles</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.blog.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
              aria-pressed={activeFilter === category}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="card overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <Link to={`/blog/${post.id}`} className="block relative overflow-hidden aspect-[16/10] group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <FaCalendar size={12} />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-3">
                  {post.category}
                </div>

                {/* Title */}
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-display font-bold mb-3 text-slate-800 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all duration-300 focus-outline rounded"
                >
                  Continue reading
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
