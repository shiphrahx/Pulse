import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ConfigPanel from '../components/ConfigPanel';
import ParticleBackground from '../components/ParticleBackground';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import { useConfig } from '../context/ConfigContext';

const Home = () => {
  const { particlesEnabled } = useConfig();
  const location = useLocation();

  useEffect(() => {
    // Set page title
    document.title = 'Pulse - Modern One-Page Portfolio & vCard Template';

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio and vCard template showcasing work, skills, and expertise.');
    }

    // Handle scroll to section from navigation state
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen relative">
      <Sidebar />
      <ConfigPanel />

      {/* Main Content */}
      <main className="lg:pl-72 relative">
        {/* Home - bg-white/dark:bg-dark-bg - Show particles in dark theme only */}
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground showInDark={true} />}
          <HomeSection />
        </div>
        {/* About - bg-slate-100/dark:bg-[#1a1a1a] - Show particles in light theme only */}
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground showInDark={false} />}
          <AboutSection />
        </div>
        {/* Services - bg-white/dark:bg-dark-bg - Show particles in dark theme only */}
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground showInDark={true} />}
          <ServicesSection />
        </div>
        {/* Portfolio - bg-slate-100/dark:bg-[#1a1a1a] - Show particles in light theme only */}
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground showInDark={false} />}
          <PortfolioSection />
        </div>
        {/* Blog - bg-white/dark:bg-dark-bg - Show particles in dark theme only */}
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground showInDark={true} />}
          <BlogSection />
        </div>
        {/* Contact - bg-slate-100/dark:bg-[#1a1a1a] - Show particles in light theme only */}
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground showInDark={false} />}
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Home;
