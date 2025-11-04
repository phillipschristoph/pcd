import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import SiteShell from '../components/layout/SiteShell';

export const metadata: Metadata = {
  title: 'Phillips Christopher Design',
  description:
    'Experience the Phillips Christopher Design portfolio — brand experiences crafted at the intersection of design, technology, and storytelling.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
};

export default RootLayout;
