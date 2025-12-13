import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ColorProvider } from './context/ColorContext';
import Home from './pages/Home';
import Details from './pages/Details';
import BlogArticle from './pages/BlogArticle';
import Preloader from './components/Preloader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader with hard timeout failsafe
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Max 3 seconds

    // Simulate loading (in real app, wait for critical resources)
    const minDisplayTime = setTimeout(() => {
      setLoading(false);
    }, 1500); // Minimum 1.5 seconds

    return () => {
      clearTimeout(timeout);
      clearTimeout(minDisplayTime);
    };
  }, []);

  return (
    <ColorProvider>
      <ThemeProvider>
        {loading ? (
          <Preloader />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:id" element={<Details type="service" />} />
              <Route path="/portfolio/:id" element={<Details type="portfolio" />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
            </Routes>
          </Router>
        )}
      </ThemeProvider>
    </ColorProvider>
  );
}

export default App;
