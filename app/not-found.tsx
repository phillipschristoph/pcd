import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 text-center text-white">
      <h1 className="text-4xl font-bold uppercase">Not Found</h1>
      <p className="text-lg text-gray-300">
        The page you are looking for does not exist. Check the URL or explore other projects.
      </p>
    </div>
  );
};

export default NotFound;
