'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import useProjects from '../../hooks/useProjects';

const OurWorkPage: React.FC = () => {
  const { projects, loading } = useProjects();
  const hasProjects = projects.length > 0;

  return (
    <div className="px-[2.5vw] py-[2.5vw] pb-10 text-white">
      <section className="px-0 md:px-0 lg:px-0">
        <div className="space-y-8">
          {loading && !hasProjects ? (
            <div className="flex items-center justify-center py-24 text-lg text-gray-300">
              Loading projects...
            </div>
          ) : null}
          {!loading && !hasProjects ? (
            <div className="flex items-center justify-center py-24 text-lg text-gray-300">
              Projects coming soon.
            </div>
          ) : null}
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[40vh]"
            >
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-500"
                  priority={project.id === 'barricade-ai'}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                  <span className="text-sm uppercase tracking-wide text-gray-400">
                    Image unavailable
                  </span>
                </div>
              )}
              <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xl max-w-2xl text-center leading-relaxed mb-6">
                  {project.learnMoreDescription}
                </p>
                <span
                  className={`px-8 py-3 ${project.learnMoreButtonColor} ${project.learnMoreButtonTextColor} rounded-md font-semibold`}
                >
                  LEARN MORE
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default OurWorkPage;
