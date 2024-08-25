import React from 'react';
import profileImage from '../../images/profile.png';

const TopNav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue shadow-md">
      <div className="relative">
        <input
          type="text"
          className="w-80 py-2 px-4 rounded-full bg-white-100 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">1</span>
          <button className="text-gray-600">
            🔔
          </button>
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
        <span className="font-semibold">Jhalok</span>
      </div>
    </div>
  );
};

export default TopNav;
