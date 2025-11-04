'use client';

import { useMemo } from 'react';

import { Project, projects as projectDefinitions } from '../data/projects';
import useCloudinaryFolder, { CloudinaryAsset } from './useCloudinaryFolder';

const BARRICADE_FOLDER = 'pcdBarricade';

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const sortAssetsChronologically = (assets: CloudinaryAsset[]) => {
  return [...assets].sort((a, b) => {
    if (!a.createdAt || !b.createdAt) {
      return 0;
    }

    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();

    return aTime - bTime;
  });
};

const addCloudinaryDefaults = (url?: string) => {
  if (!url) {
    return undefined;
  }

  if (!url.includes('/upload/')) {
    return url;
  }

  if (url.includes('f_auto') || url.includes('q_auto')) {
    return url;
  }

  return url.replace('/upload/', '/upload/f_auto,q_auto/');
};

const useProjects = (): UseProjectsResult => {
  const {
    assets: barricadeAssets,
    loading: barricadeLoading,
    error: barricadeError,
  } = useCloudinaryFolder(BARRICADE_FOLDER);

  const projects = useMemo<Project[]>(() => {
    const sortedBarricadeAssets = barricadeAssets.length
      ? sortAssetsChronologically(barricadeAssets)
      : [];

    return projectDefinitions.map((project) => {
      if (project.cloudinaryFolder !== BARRICADE_FOLDER) {
        return {
          ...project,
          galleryImages: project.galleryImages ?? [],
        };
      }

      const matchedHeroAsset = project.heroImagePublicId
        ? sortedBarricadeAssets.find((asset) => {
            const publicId = asset.publicId ?? '';
            return (
              publicId === project.heroImagePublicId ||
              publicId.endsWith(`/${project.heroImagePublicId}`)
            );
          })
        : undefined;

      const fallbackHero = addCloudinaryDefaults(
        sortedBarricadeAssets[0]?.secureUrl as string | undefined
      );
      const heroImage =
        addCloudinaryDefaults(matchedHeroAsset?.secureUrl) ??
        project.heroImage ??
        fallbackHero;

      const barricadeGallery = sortedBarricadeAssets
        .map((asset) => addCloudinaryDefaults(asset.secureUrl))
        .filter(
          (secureUrl): secureUrl is string =>
            Boolean(secureUrl) && secureUrl !== heroImage
        );

      return {
        ...project,
        heroImage,
        galleryImages: barricadeGallery.length
          ? barricadeGallery
          : project.galleryImages ?? [],
      };
    });
  }, [barricadeAssets]);

  return {
    projects,
    loading: barricadeLoading,
    error: barricadeError,
  };
};

export default useProjects;
