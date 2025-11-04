import React from 'react';

const AiBrandsSection: React.FC = () => {
    return (
        <section className="py-10 flex items-center justify-center">
            <div 
                className="min-w-[95vw] min-h-[90vh] bg-[rgba(255,240,0,0.95)] rounded-[20px] p-8 md:p-20 lg:p-24 flex flex-col justify-center"
            >
                <div className="max-w-8xl space-y-6 md:space-y-10">
                    <p 
                        className="font-semibold text-[#b2afaf] text-4xl sm:text-5xl lg:text-[65px] leading-[1.25] font-raleway"
                    >
                        I build AI brands, websites & apps,<br /> by partnering with
                        businesses around the world.
                    </p>
                <br /><br />
                    <p 
                        className="font-semibold text-[#b2afaf] text-4xl sm:text-5xl lg:text-[65px] leading-[1.25] font-raleway"
                    >
                        I design with a human first user-centric mindset.
                    </p>
                    <p 
                        className="font-semibold text-[#b2afaf] text-4xl sm:text-5xl lg:text-[65px] leading-[1.25] font-raleway"
                    >
                        Reinventing how design helps businesses and humanity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AiBrandsSection;