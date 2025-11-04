'use client';

import { useEffect, useState } from 'react';

export interface CloudinaryAsset {
  assetId?: string;
  publicId?: string;
  folder?: string;
  secureUrl: string;
  width?: number;
  height?: number;
  createdAt?: string;
}

interface UseCloudinaryFolderResult {
  assets: CloudinaryAsset[];
  loading: boolean;
  error: string | null;
}

const useCloudinaryFolder = (folder: string): UseCloudinaryFolderResult => {
  const [assets, setAssets] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchAssets = async () => {
      if (!folder) {
        setAssets([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/cloudinary/folder?folder=${encodeURIComponent(folder)}`,
          {
            method: 'GET',
            cache: 'no-store',
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!isCancelled) {
          setAssets(Array.isArray(data.resources) ? data.resources : []);
        }
      } catch (err) {
        if (!isCancelled) {
          const message = err instanceof Error ? err.message : 'Unknown error';
          setError(message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchAssets();

    return () => {
      isCancelled = true;
    };
  }, [folder]);

  return { assets, loading, error };
};

export default useCloudinaryFolder;
