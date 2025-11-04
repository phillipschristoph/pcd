import React from 'react';
import LogoCarousel from '../LogoCarousel';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="p-10 md:p-28 lg:p-32 flex flex-col items-center justify-center text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-relaxed mb-40 md:mb-60 lg:mb-72">
            For over 15+ years we have helped fortune 500 companies, small business & startups re-define how the world sees their brand.
          </p>
          <LogoCarousel />
        </section>
    );
};

export default AboutSection;