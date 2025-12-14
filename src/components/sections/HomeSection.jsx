import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaDownload, FaEnvelope } from 'react-icons/fa';
import { useTyper } from '../../hooks/useTyper';
import { useCounter } from '../../hooks/useCounter';
import { personalInfo } from '../../data/data';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
};

// Animated Metric Component
const AnimatedMetric = ({ value, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const metricRef = useRef(null);
  const count = useCounter(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricRef.current) {
      observer.observe(metricRef.current);
    }

    return () => {
      if (metricRef.current) {
        observer.unobserve(metricRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={metricRef}
      className="card p-6 hover:shadow-xl transition-shadow duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
        {count}+
      </div>
      <div className="text-slate-600 dark:text-slate-400 font-medium">
        {label}
      </div>
    </div>
  );
};

const HomeSection = () => {
  const typedText = useTyper(personalInfo.role, 100, 50, 2000);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center animate-slide-up">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-8 ring-primary-500/20 shadow-2xl">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-4">
            {personalInfo.name}
          </h1>

          {/* Typer Effect */}
          <div className="mb-6 h-12 flex items-center justify-center">
            <h2 className="text-2xl lg:text-3xl text-gradient font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {personalInfo.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 focus-outline"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToPortfolio}
              className="btn btn-primary"
            >
              <FaDownload />
              View Portfolio
            </button>
            <button
              onClick={scrollToContact}
              className="btn btn-outline"
            >
              <FaEnvelope />
              Hire Me
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {personalInfo.metrics.map((metric, index) => (
              <AnimatedMetric
                key={metric.label}
                value={metric.value}
                label={metric.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
