import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
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

      {/* Main Content */}
      <main className="lg:pl-72">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
