import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Swiper: any;
  }
}

const logos = [
  'https://uploads-ssl.webflow.com/65dfcc50263944170d94aa61/66051e057e2dde439035290f_sony-600.webp',
  'https://uploads-ssl.webflow.com/65dfcc50263944170d94aa61/66051e05a0bf251c266492c5_google-600.webp',
  'https://uploads-ssl.webflow.com/65dfcc50263944170d94aa61/66051e0585b177d2b3ac8d58_ucla-600.webp',
  'https://uploads-ssl.webflow.com/65dfcc50263944170d94aa61/66051e0b4919d3ae858ba263_toms-600.webp',
  'https://uploads-ssl.webflow.com/65dfcc50263944170d94aa61/66051d26de80def7d06a4fd2_nasa-600.webp',
];

const LogoCarousel: React.FC = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window.Swiper === 'undefined' || !swiperRef.current) {
        console.error("Swiper is not loaded");
        return;
    }

    const swiper = new window.Swiper(swiperRef.current, {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        // When using 'auto' slides per view, loopedSlides should be set
        // to a number that is guaranteed to be more than the number of
        // visible slides on any screen size.
        loopedSlides: 5,
        allowTouchMove: false,
        speed: 10000,
        autoplay: {
            delay: 1, // A tiny delay can help with browser rendering and prevent jumps
            disableOnInteraction: false,
        },
    });
    
    return () => {
        if (swiper) {
            swiper.destroy(true, true);
        }
    };

  }, []);

  return (
    <div className="swiper-container w-full max-w-7xl" ref={swiperRef}>
        <div className="swiper-wrapper !ease-linear select-none">
            {logos.map((logo, index) => (
                <div key={index} className="swiper-slide !w-auto">
                    <div className="bg-white rounded-3xl flex items-center justify-center p-10 h-64 w-96 md:h-72 md:w-[28rem] lg:h-80 lg:w-[32rem]">
                        <img src={logo} alt={`Partner logo ${index + 1}`} className="h-full w-full object-contain" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default LogoCarousel;