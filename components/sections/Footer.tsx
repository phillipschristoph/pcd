
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
            {/* Column 1: Heading */}
            <h3 className="text-5xl md:text-6xl lg:text-8xl font-semibold whitespace-nowrap">
                Let's Innovate
            </h3>

            {/* Column 2: Email */}
            <div className="text-xl font-raleway font-semibold leading-[1.1] text-left">
                <p>Email Our team:</p>
                <a href="mailto:chris@phillipschristopher.com" className="hover:text-yellow-300 transition-colors">
                    chris@phillipschristopher.com
                </a>
            </div>
            
            {/* Column 3: Copyright */}
            <p className="text-2xl font-raleway font-semibold leading-[1.1] whitespace-nowrap">
                Phillips Christopher Design 2025
            </p>
          </div>
        </footer>
    );
};

export default Footer;