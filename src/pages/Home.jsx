import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ColorSwitcher from '../components/ColorSwitcher';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
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
    <div className="min-h-screen">
      <Sidebar />
      <ColorSwitcher />

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="bg-white dark:bg-dark-bg">
          <HomeSection />
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a]">
          <AboutSection />
        </div>
        <div className="bg-white dark:bg-dark-bg">
          <ServicesSection />
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a]">
          <PortfolioSection />
        </div>
        <div className="bg-white dark:bg-dark-bg">
          <BlogSection />
        </div>
        <div className="bg-slate-100 dark:bg-[#1a1a1a]">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Home;
