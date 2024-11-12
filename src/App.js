import React from 'react';
import Profile from './Profile';
import ExperienceGrid from './ExperienceGrid';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      {/* Profile Component */}
      <Profile />

      {/* Experience Grid Component */}
      <div className="w-full max-w-5xl mt-12 px-4">
        <ExperienceGrid />
      </div>
    </div>
  );
};

export default App;
