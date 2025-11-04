import React from 'react';

interface MenuIconProps {
  isOpen: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, className = '', style }) => {
  const lineStyle = "absolute h-[3px] bg-black rounded-sm transition-all duration-300 ease-in-out";

  return (
    <div className={`relative w-6 h-6 ${className}`} style={style}>
      {/* Top line */}
      <div
        className={`${lineStyle} w-full top-[5px]`}
        style={{
          transform: isOpen ? 'translateY(6px) rotate(-45deg)' : 'none',
          width: isOpen ? '100%' : '100%'
        }}
      />
      {/* Middle line */}
      <div
        className={`${lineStyle} w-2/3 top-[11px]`}
        style={{
          opacity: isOpen ? '0' : '1',
        }}
      />
      {/* Bottom line */}
      <div
        className={`${lineStyle} w-2/3 top-[17px]`}
        style={{
          transform: isOpen ? 'translateY(-6px) rotate(45deg)' : 'none',
          width: isOpen ? '100%' : '66.6667%',
        }}
      />
    </div>
  );
};