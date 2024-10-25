// src/Page/Home.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup'; // Importing the CountUp component

const Home = () => {
  // State to control animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adding a slight delay before showing the right-side div for a smooth transition
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 h-screen">
      {/* Main container */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-between px-8 lg:px-20 pt-4 lg:pt-20">
        {/* Left side text */}
        <div className="text-white space-y-4 lg:space-y-6 lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-shadow">
            Book Your Artist with Ease.
          </h1>
          <p className="text-lg lg:text-2xl font-semibold italic text-opacity-90">
            Wherever You Are. Whatever Your Budget.
          </p>
          <Link
            to="/artist-list"
            className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg lg:text-xl"
          >
            Book Your Artist
          </Link>
        </div>

        {/* Right side stats container with animation */}
        <div
          className={`flex-shrink-0 mt-2 transition-opacity duration-1000 ease-in-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="flex space-x-4 lg:space-x-6 bg-black bg-opacity-80 rounded-full py-4 px-6 lg:py-5 lg:px-7 shadow-lg">
            {/* Bookings */}
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                <CountUp end={16000} duration={3} />+ {/* Counting up effect */}
              </h2>
              <p className="text-sm lg:text-lg text-gray-300">Bookings</p>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-gray-700 mx-2 lg:mx-4"></div>

            {/* Live Entertainers */}
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                <CountUp end={10000} duration={3} />+ {/* Counting up effect */}
              </h2>
              <p className="text-sm lg:text-lg text-gray-300">Live Entertainers</p>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-gray-700 mx-2 lg:mx-4"></div>

            {/* Cities */}
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                <CountUp end={50} duration={3} />+ {/* Counting up effect */}
              </h2>
              <p className="text-sm lg:text-lg text-gray-300">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
