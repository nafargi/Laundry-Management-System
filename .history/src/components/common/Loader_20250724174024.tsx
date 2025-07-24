// src/components/common/Loader.tsx
import React from 'react';

const Loader: React.FC = () => (
  <div className="flex justify-center items-center p-4">
    <svg
      className="animate-spin h-8 w-8 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
      />
    </svg>
  </div>
);

export default Loader;
