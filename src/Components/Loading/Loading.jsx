import React from 'react';
import { GridLoader } from 'react-spinners';

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
      <GridLoader
        size={40}
        color="#6B46C1"
        loading={true}
        speedMultiplier={1.5}
        />

      <p className="mt-4 text-gray-600 text-sm">{message}</p>
    </div>
  );
}
