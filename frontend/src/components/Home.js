import React from 'react';

const Home = () => {
  return (
    <div className="w-1/4 h-screen bg-blue-800 text-white flex flex-col items-center py-6">
      <div className="w-20 h-20 bg-white rounded mb-6"></div>
      <nav className="text-left">
        <div className="flex items-center space-x-2 mb-4">
          <span className="material-icons">arrow_forward</span>
          <span>Personal Info</span>
        </div>
        <ul>
          <li className="mb-2">NAME</li>
          <li className="mb-2">SEX</li>
          <li className="mb-2">AGE</li>
          <li className="mb-2">OTHER PERSONAL INFO</li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
