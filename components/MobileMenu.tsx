
'use client';

import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onMenuToggle: () => void;
  navigate: (path: string) => void;
  currentPath: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onMenuToggle, navigate, currentPath }) => {
  const handleScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onMenuToggle();

    if (currentPath !== '/') {
      navigate('/');
      // Use timeout to wait for home page to render before scrolling
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onMenuToggle();
    if (currentPath !== '/') {
      navigate('/');
    } else {
      document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onMenuToggle();
    navigate(path);
  };
    
  return (
    <div
      className={`fixed inset-0 bg-yellow-300 text-black z-40 transition-opacity duration-100 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full pt-24">
        <nav className="flex flex-col items-center gap-10">
          <a href="/" onClick={handleHomeClick} className="text-7xl lg:text-8xl font-raleway font-semibold text-[#464646] leading-[1.1] hover:text-black hover:font-bold transition-all duration-300">
            home
          </a>
          <a href="/work" onClick={(e) => handleNavigateClick(e, '/work')} className="text-7xl lg:text-8xl font-raleway font-semibold text-[#464646] leading-[1.1] hover:text-black hover:font-bold transition-all duration-300">
            our work
          </a>
          <a href="/#contact" onClick={(e) => handleScrollLinkClick(e, '#contact')} className="text-7xl lg:text-8xl font-raleway font-semibold text-[#464646] leading-[1.1] hover:text-black hover:font-bold transition-all duration-300">
            reach us
          </a>
        </nav>
        <div className="absolute bottom-10 text-center font-semibold">
            <a href="mailto:hello@phillipschristopher.com" className="text-lg text-gray-700 hover:text-black transition-colors">hello@phillipschristopher.com</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
