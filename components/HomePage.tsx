'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './sections/HeroSection';
import AiBrandsSection from './sections/AiBrandsSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import RelationshipSection from './sections/RelationshipSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigate = useCallback(
    (path: string) => {
      if (!path) {
        return;
      }
      router.push(path);
    },
    [router]
  );

  return (
    <>
      <HeroSection />
      <AiBrandsSection />
      <AboutSection />
      <WorkSection navigate={navigate}/>
      <RelationshipSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
