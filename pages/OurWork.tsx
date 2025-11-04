
import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import { projects } from '../data/projects';

interface OurWorkProps {
    navigate: (path: string) => void;
}

const OurWork: React.FC<OurWorkProps> = ({ navigate }) => {
    const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <div className="px-[2.5vw] py-[2.5vw] pb-10 text-white">
            <section className="px-0 md:px-0 lg:px-0">
                <div className="space-y-8">
                    {projects.map((project) => (
                        <a 
                            key={project.id}
                            href={`/project/${project.id}`} 
                            onClick={(e) => handleProjectClick(e, `/project/${project.id}`)} 
                            className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[40vh]"
                        >
                            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                            <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-xl max-w-2xl text-center leading-relaxed mb-6">{project.learnMoreDescription}</p>
                                <span className={`px-8 py-3 ${project.learnMoreButtonColor} ${project.learnMoreButtonTextColor} rounded-md font-semibold`}>LEARN MORE</span>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-300">{project.subtitle}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            <ContactSection />
            <Footer />
        </div>
    );
};

export default OurWork;