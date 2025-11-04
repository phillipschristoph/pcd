'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '../Header';
import MobileMenu from '../MobileMenu';
import ThreejsBackground from '../ThreejsBackground';
import FloatingButtons from '../FloatingButtons';

interface SiteShellProps {
  children: React.ReactNode;
}

const SiteShell: React.FC<SiteShellProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundOpacityClass, setBackgroundOpacityClass] = useState(() =>
    pathname === '/' ? 'opacity-100' : 'opacity-10'
  );

  const navigate = useMemo(
    () => (path: string) => {
      if (!path || path === pathname) {
        return;
      }
      router.push(path);
    },
    [pathname, router]
  );

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const contactSection = document.getElementById('contact');

      let isOpaque = false;
      const triggerPoint = window.innerHeight;

      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.bottom > 0 && heroRect.top < triggerPoint) {
          isOpaque = true;
        }
      }

      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top < triggerPoint) {
          isOpaque = true;
        }
      }

      setBackgroundOpacityClass(isOpaque ? 'opacity-100' : 'opacity-10');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <div
        className={`fixed top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${backgroundOpacityClass}`}
      >
        <ThreejsBackground />
      </div>
      <Header
        onMenuToggle={toggleMenu}
        isMenuOpen={isMenuOpen}
        navigate={navigate}
        currentPath={pathname}
      />
      <MobileMenu
        isOpen={isMenuOpen}
        onMenuToggle={toggleMenu}
        navigate={navigate}
        currentPath={pathname}
      />
      <FloatingButtons />

      <main key={pathname} className="relative z-10 fade-in">
        {children}
      </main>
    </div>
  );
};

export default SiteShell;
