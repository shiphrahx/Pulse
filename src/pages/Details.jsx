import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaCalendar, FaUser } from 'react-icons/fa';
import { services, portfolio } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const Details = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const data = type === 'service'
    ? services.find(item => item.id === id)
    : portfolio.find(item => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate('/');
      return;
    }

    // Set page title
    document.title = `${data.title} - Pulse`;

    // Scroll to top
    window.scrollTo(0, 0);
  }, [data, navigate]);

  if (!data) {
    return null;
  }

  const isService = type === 'service';
  const images = isService ? [data.image] : data.images || [data.thumbnail];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 card border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-outline rounded"
          >
            <FaArrowLeft />
            <span className="font-medium">Back to Home</span>
          </Link>

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
        <article className="container mx-auto px-6 max-w-5xl">
          {/* Hero Image Gallery */}
          <div className="mb-12 animate-fade-in">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
              <img
                src={images[currentImageIndex]}
                alt={data.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Image Thumbnails (for portfolio) */}
            {!isService && images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all focus-outline ${
                      currentImageIndex === index
                        ? 'border-primary-600'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${data.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Header */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold mb-4">
              {data.category || (isService ? 'Service' : 'Project')}
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              {data.title}
            </h1>

            {/* Meta Info (for portfolio) */}
            {!isService && (
              <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">
                {data.client && (
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{data.client}</span>
                  </div>
                )}
                {data.year && (
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{data.year}</span>
                  </div>
                )}
                {data.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline focus-outline rounded"
                  >
                    <FaExternalLinkAlt />
                    <span>View Live</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="card p-8 lg:p-12 mb-8 animate-slide-up animate-delay-200">
            <h2 className="text-2xl font-display font-bold mb-4">
              {isService ? 'Service Description' : 'Project Overview'}
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {isService ? data.fullDescription : data.overview}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features / Challenges */}
            {(isService ? data.features : data.challenges) && (
              <div className="card p-8 animate-slide-up animate-delay-400">
                <h3 className="text-xl font-display font-bold mb-6">
                  {isService ? 'What\'s Included' : 'Challenges'}
                </h3>
                <ul className="space-y-3">
                  {(isService ? data.features : data.challenges).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies / Results */}
            {(data.technologies || data.results) && (
              <div className="card p-8 animate-slide-up animate-delay-600">
                <h3 className="text-xl font-display font-bold mb-6">
                  {isService ? 'Technologies' : 'Results'}
                </h3>
                <ul className="space-y-3">
                  {(isService ? data.technologies : data.results).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/#contact"
              className="btn btn-primary inline-flex"
            >
              Get Started
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Details;
