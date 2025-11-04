
import React from 'react';
import Footer from '../components/sections/Footer';

interface ProjectBarricadeAIProps {
    navigate: (path: string) => void;
}

const ProjectBarricadeAI: React.FC<ProjectBarricadeAIProps> = ({ navigate }) => {

    const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        navigate(path);
    };

    const showcaseImages = [
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b1143f357d2145bcda69bc_Screenshot%202025-02-15%20140536.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114400778c8023e8af83f_Screenshot%202025-02-15%20140704.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11440e9085fb796023c2b_Screenshot%202025-02-15%20140729.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11441cf1ec1938b4294c2_Screenshot%202025-02-15%20140821.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11441cf1ec1938b4294d6_Screenshot%202025-02-15%20140911.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114428526b4ba5c2cab2c_Screenshot%202025-02-15%20140944.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11442d98df6fd29bd3464_Screenshot%202025-02-15%20140840.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11443cf04327d71d4a635_Screenshot%202025-02-15%20141101.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b1144301903fd77fd5fb16_Screenshot%202025-02-15%20142131.png",
        "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11443ad08650c0f5f0c2e_Screenshot%202025-02-15%20142209.png"
    ];

    return (
        <div className="px-[2.5vw] py-[2.5vw] pb-10 text-white">
            <div className="mx-4 md:mx-8 lg:mx-16 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl bg-[#181818]">
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center text-center">
                    <img 
                        src="https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114400778c8023e8af83f_Screenshot%202025-02-15%20140704.png" 
                        alt="Barricade AI hero" 
                        className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <h1 className="relative text-7xl md:text-9xl lg:text-[10rem] font-black uppercase z-10 px-4">
                        Barricade AI
                    </h1>
                </section>
                
                {/* Intro Section */}
                <section className="py-32 md:py-48 lg:py-56 px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-raleway">
                            Streamlining Law Enforcement with AI-Powered Reporting
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Barricade AI was developed to revolutionize the process of filing police reports. By leveraging artificial intelligence, we designed a platform that simplifies data entry, reduces administrative overhead for officers, and improves the accuracy and accessibility of incident reports for the public.
                        </p>
                    </div>
                </section>

                {/* Product Showcase Gallery */}
                <div className="px-6 md:px-12 lg:px-16 space-y-8">
                    {showcaseImages.map((src, index) => (
                        <section key={index}>
                            <img 
                                src={src} 
                                alt={`Barricade AI showcase ${index + 1}`} 
                                className="w-full h-auto rounded-lg"
                            />
                        </section>
                    ))}
                </div>


                {/* Final Sentence Section */}
                <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 text-center">
                    <p className="max-w-4xl mx-auto text-2xl md:text-4xl lg:text-5xl leading-relaxed font-semibold font-raleway">
                        I am consistently re-invent industry standards pushing towards innovation using cutting-edge design and tech to deliver the best results.
                    </p>
                </section>
            </div>

             {/* Other Projects Section */}
            <section className="py-20 px-4 md:px-8 lg:px-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 uppercase">Other Projects</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
                    <a href="/project/devavonne-ai" onClick={(e) => handleProjectClick(e, '/project/devavonne-ai')} className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[33vh]">
                        <img src="https://assets-global.website-files.com/65dfcc50263944170d94aa61/66052cc2d5339cffb2142409_Devavonne_Edgy_2048.webp" alt="Devavonne AI" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                            <h3 className="text-2xl font-bold">DEVAVONNE AI</h3>
                            <p className="text-gray-300">Revolutionizing the fashion world with AI</p>
                        </div>
                    </a>
                    <a href="/project/google-fiber" onClick={(e) => handleProjectClick(e, '/project/google-fiber')} className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[33vh]">
                        <img src="https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef55045103ed190c1a8_Fiber2.webp" alt="Google Fiber project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                            <h3 className="text-2xl font-bold">GOOGLE FIBER</h3>
                            <p className="text-gray-300">Delivering the worlds fastest internet to millions</p>
                        </div>
                    </a>
                    <a href="/project/barricade-ai" onClick={(e) => handleProjectClick(e, '/project/barricade-ai')} className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[33vh]">
                        <img src="https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114400778c8023e8af83f_Screenshot%202025-02-15%20140704.png" alt="Barricade AI Project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                            <h3 className="text-2xl font-bold">Barricade AI</h3>
                            <p className="text-gray-300">making police reports with AI</p>
                        </div>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectBarricadeAI;
