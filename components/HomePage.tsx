
import React from 'react';
import HeroSection from './sections/HeroSection';
import AiBrandsSection from './sections/AiBrandsSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import RelationshipSection from './sections/RelationshipSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

interface HomePageProps {
  navigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <>
      <HeroSection />
      <AiBrandsSection />
      <AboutSection />
      <WorkSection navigate={navigate} />
      <RelationshipSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
