import React from 'react';
import { notFound } from 'next/navigation';
import ProjectPage from '../../../components/pages/ProjectPage';
import { projects } from '../../../data/projects';

interface ProjectRouteProps {
  params: {
    projectId: string;
  };
}

const ProjectRoute: React.FC<ProjectRouteProps> = ({ params }) => {
  const projectId = decodeURIComponent(params.projectId);
  const projectExists = projects.some((project) => project.id === projectId);

  if (!projectExists) {
    notFound();
  }

  return <ProjectPage projectId={projectId} />;
};

export default ProjectRoute;

export const generateStaticParams = () =>
  projects.map((project) => ({
    projectId: project.id,
  }));
