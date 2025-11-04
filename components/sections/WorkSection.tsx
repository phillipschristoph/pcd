/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { projects } from '../../data/projects';

interface WorkSectionProps {
  navigate: (path: string) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ navigate }) => {
  const handleProjectClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <section id="work" className="py-12 px-4 md:px-8 lg:px-12 space-y-8">
      {projects.map((project) => (
        <a
          key={project.id}
          href={`/project/${project.id}`}
          onClick={(event) => handleProjectClick(event, `/project/${project.id}`)}
          className="block relative group overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
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
        </a>
      ))}
    </section>
  );
};

export default WorkSection;
