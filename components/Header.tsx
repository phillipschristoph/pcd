import React from 'react';
import { MenuIcon } from './icons/MenuIcon';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  navigate: (path: string) => void;
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen, navigate, currentPath }) => {
  const handleLogoClick = () => {
    if (isMenuOpen) {
      onMenuToggle();
    }
    if (currentPath !== '/') {
      navigate('/');
    } else {
      document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[2.5vw] px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-white text-black px-[35px] py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div
            onClick={handleLogoClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Go to homepage"
            className="text-sm font-bold text-left leading-[12px] tracking-[1px] cursor-pointer focus:outline-none rounded"
            style={{ transform: 'translateX(-10px)' }}
          >
            <span>PHILLIPS</span><br />
            <span>CHRISTOPHER</span><br />
            <span>DESIGN</span>
          </div>
          <button
            onClick={onMenuToggle}
            aria-label="Toggle menu"
            className="focus:outline-none rounded-full"
          >
            <MenuIcon 
              isOpen={isMenuOpen} 
              className="w-6 h-6" 
              style={{ transform: 'translateX(15px)' }} 
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;