'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../sections/Footer';
import useProjects from '../../hooks/useProjects';

interface ProjectPageProps {
  projectId: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projectId }) => {
  const { projects, loading } = useProjects();
  const project = projects.find((p) => p.id === projectId);

  if (loading && !project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <h1 className="text-3xl uppercase tracking-[0.3em] text-gray-400">
          Loading project...
        </h1>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <h1 className="text-4xl">Project not found</h1>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== projectId);
  const galleryImages = project.galleryImages ?? [];

  return (
    <div className="px-[2.5vw] py-[2.5vw] pb-10 text-white">
      <div className="mx-4 md:mx-8 lg:mx-16 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl bg-[#181818]">
        <section className="relative h-[70vh] flex items-center justify-center text-center">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Image unavailable
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative text-7xl md:text-9xl lg:text-[10rem] font-black uppercase z-10 px-4">
            {project.title}
          </h1>
        </section>

        <section className="py-32 md:py-48 lg:py-56 px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-raleway">
              {project.descriptionTitle}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl font-raleway">
              {project.descriptionBody}
            </p>
          </div>
        </section>

        <div className="px-6 md:px-12 lg:px-16 space-y-8">
          {galleryImages.map((src, index) => (
            <section key={index}>
              <Image
                src={src}
                alt={`${project.title} showcase ${index + 1}`}
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="h-auto w-full rounded-lg object-cover"
              />
            </section>
          ))}
        </div>

        <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 text-center">
          <p className="max-w-4xl mx-auto text-2xl md:text-4xl lg:text-5xl leading-relaxed font-semibold !font-raleway">
            {project.finalQuote}
          </p>
        </section>
      </div>

      <section className="py-20 px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 uppercase">
          Other Projects
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {otherProjects.map((otherProject) => (
            <Link
              key={otherProject.id}
              href={`/project/${otherProject.id}`}
              className="block relative group overflow-hidden rounded-2xl cursor-pointer h-[33vh]"
            >
              {otherProject.heroImage ? (
                <Image
                  src={otherProject.heroImage}
                  alt={otherProject.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Image unavailable
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-2xl font-bold">{otherProject.title}</h3>
                <p className="text-gray-300">{otherProject.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
