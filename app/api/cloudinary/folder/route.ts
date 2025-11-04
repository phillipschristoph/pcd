import { NextResponse } from 'next/server';

interface CloudinaryCredentials {
  apiKey: string;
  apiSecret: string;
  cloudName: string;
}

const parseCloudinaryCredentials = (): CloudinaryCredentials => {
  const cloudinaryUrl = process.env.CLOUDINARY_URL;

  if (!cloudinaryUrl) {
    throw new Error('Missing CLOUDINARY_URL environment variable.');
  }

  let parsed: URL;
  try {
    parsed = new URL(cloudinaryUrl);
  } catch {
    throw new Error('Invalid CLOUDINARY_URL format.');
  }

  const apiKey = parsed.username;
  const apiSecret = parsed.password;
  const cloudName = parsed.hostname;

  if (!apiKey || !apiSecret || !cloudName) {
    throw new Error('Incomplete Cloudinary credentials.');
  }

  return { apiKey, apiSecret, cloudName };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json(
      { error: 'Query parameter "folder" is required.' },
      { status: 400 }
    );
  }

  let credentials: CloudinaryCredentials;

  try {
    credentials = parseCloudinaryCredentials();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to load Cloudinary credentials.';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  const { apiKey, apiSecret, cloudName } = credentials;
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression: `folder="${folder}"`,
        max_results: 100,
        sort_by: [{ created_at: 'desc' }],
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Cloudinary API request failed.', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    const resources = Array.isArray(data.resources)
      ? data.resources.map((resource: Record<string, unknown>) => ({
          assetId: resource.asset_id,
          publicId: resource.public_id,
          folder: resource.folder,
          secureUrl: resource.secure_url,
          width: resource.width,
          height: resource.height,
          createdAt: resource.created_at,
        }))
      : [];

    return NextResponse.json(
      { resources },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('Cloudinary folder fetch failed:', error);
    const message = error instanceof Error ? error.message : 'Unexpected error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
