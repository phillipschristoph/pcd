import React, { useState, useEffect, useMemo } from 'react';

const HeroSection: React.FC = () => {
  const words = useMemo(() => ["Websites", "Brands", "AI APPS"], []);
  const displayWords = useMemo(() => [...words, words[0]], [words]);
  
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false);

  useEffect(() => {
    // This effect manages the entire animation cycle based on the current state.

    // State 1: We've just jumped back to the start without a transition.
    // Now, we need to re-enable transitions for the next slide.
    if (isTransitionDisabled) {
      const reenableTimeout = setTimeout(() => {
        setIsTransitionDisabled(false);
      }, 50); // A tiny delay ensures the browser has processed the non-transitioned state.
      return () => clearTimeout(reenableTimeout);
    }

    // State 2: We're at the end of the list (on the cloned item).
    // Wait for the CSS transition to finish, then jump back to the start.
    if (wordIndex === words.length) {
      const resetTimeout = setTimeout(() => {
        setIsTransitionDisabled(true); // Disable transitions for the jump
        setWordIndex(0);
      }, 500); // Must match the CSS transition duration
      return () => clearTimeout(resetTimeout);
    }

    // State 3 (Default): We're on a visible item.
    // Schedule the next slide to appear after a delay.
    const slideTimeout = setTimeout(() => {
      setWordIndex((prevIndex) => prevIndex + 1);
    }, 2000); // On-screen time for each word

    return () => clearTimeout(slideTimeout);
  }, [wordIndex, words.length, isTransitionDisabled]);


  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-black text-yellow-300 uppercase leading-none tracking-tighter">
        Innovating
      </h1>
      <div 
        className="text-6xl md:text-9xl lg:text-[10rem] font-black text-yellow-300 uppercase leading-none tracking-tighter w-[8em] md:w-[6.5em] lg:w-[6em] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)',
        }}
      >
        <div 
          className={`flex ${isTransitionDisabled ? 'transition-none' : 'transition-transform duration-[500ms] ease-in-out'}`}
          style={{ transform: `translateX(-${wordIndex * 100}%)` }}
        >
          {displayWords.map((word, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              {word}
            </div>
          ))}
        </div>
      </div>
      <a 
        href="/#contact" 
        onClick={handleContactClick}
        className="mt-8 px-8 py-3 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
      >
        CONTACT US
      </a>
    </section>
  );
};

export default HeroSection;