import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaBlog, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/data';

const navItems = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'services', label: 'Services', icon: FaBriefcase },
  { id: 'portfolio', label: 'Portfolio', icon: FaFolderOpen },
  { id: 'blog', label: 'Blog', icon: FaBlog },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Scrollspy using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleKeyDown = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 card focus-outline rounded-xl"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 card z-40
          flex flex-col p-8
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          overflow-y-auto custom-scrollbar
        `}
        aria-label="Main navigation"
      >
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-500/20">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <h2 className="text-xl font-display font-bold mb-1">
            {personalInfo.name}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {personalInfo.role[0]}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2" role="list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300 focus-outline
                      ${
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="mt-6 w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-outline"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          <span className="font-medium">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </span>
        </button>

        {/* Copyright */}
        <p className="mt-6 text-xs text-center text-slate-500 dark:text-slate-500">
          © 2024 {personalInfo.name}
        </p>
      </aside>
    </>
  );
};

export default Sidebar;
