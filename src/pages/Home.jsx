import { useEffect } from 'react';
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

  useEffect(() => {
    // Set page title
    document.title = 'Pulse - Modern One-Page Portfolio & vCard Template';

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio and vCard template showcasing work, skills, and expertise.');
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <Sidebar />
      <ConfigPanel />

      {/* Main Content */}
      <main className="lg:pl-72 relative">
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground variant="light" />}
          <div className="relative z-10">
            <HomeSection />
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground variant="dark" />}
          <div className="relative z-10">
            <AboutSection />
          </div>
        </div>
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground variant="light" />}
          <div className="relative z-10">
            <ServicesSection />
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground variant="dark" />}
          <div className="relative z-10">
            <PortfolioSection />
          </div>
        </div>
        <div className="bg-white dark:bg-dark-bg relative">
          {particlesEnabled && <ParticleBackground variant="light" />}
          <div className="relative z-10">
            <BlogSection />
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a] relative">
          {particlesEnabled && <ParticleBackground variant="dark" />}
          <div className="relative z-10">
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
