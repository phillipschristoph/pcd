
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import ThreejsBackground from './components/ThreejsBackground';
import FloatingButtons from './components/FloatingButtons';

import HomePage from './components/HomePage';
import ProjectPage from './pages/ProjectPage';
import OurWork from './pages/OurWork';


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const [backgroundOpacityClass, setBackgroundOpacityClass] = useState(
    window.location.pathname === '/' ? 'opacity-100' : 'opacity-10'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home'); // HeroSection ID
      const contactSection = document.getElementById('contact');
      
      let isOpaque = false;
      const triggerPoint = window.innerHeight;

      // Rule 1: If Hero Section is visible, background is opaque.
      // This handles the homepage correctly on load and scroll.
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.bottom > 0 && heroRect.top < triggerPoint) {
          isOpaque = true;
        }
      }

      // Rule 2: If Contact Section is visible, background is opaque.
      // This works for all pages.
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top < triggerPoint) {
          isOpaque = true;
        }
      }
      
      setBackgroundOpacityClass(isOpaque ? 'opacity-100' : 'opacity-10');
    };

    // Run on initial load/navigation to set the correct state immediately
    handleScroll(); 
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPath]); // Rerun this effect when the page changes

  const navigate = (path: string) => {
    setCurrentPath(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const renderPage = () => {
    if (currentPath === '/work') {
      return <OurWork navigate={navigate} />;
    }
    if (currentPath.startsWith('/project/')) {
      const projectId = currentPath.split('/project/')[1];
      return <ProjectPage projectId={projectId} navigate={navigate} />;
    }
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <div className={`fixed top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${backgroundOpacityClass}`}>
        <ThreejsBackground />
      </div>
      <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} navigate={navigate} currentPath={currentPath} />
      <MobileMenu isOpen={isMenuOpen} onMenuToggle={toggleMenu} navigate={navigate} currentPath={currentPath} />
      <FloatingButtons />

      <main key={currentPath} className="relative z-10 fade-in">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;