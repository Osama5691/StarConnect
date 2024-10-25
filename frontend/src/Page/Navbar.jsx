import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 text-white py-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 h-20 lg:h-24">
        {/* Logo without circle */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"  // Replace with the correct path for your logo
            alt="StarConnect Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover shadow-xl"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6 sm:space-x-8 lg:space-x-12 items-center">
          {/* Home Link */}
          <Link to="/" className="hidden sm:inline-block text-sm sm:text-lg font-semibold text-indigo-200 hover:text-indigo-400 transition duration-200 ease-in-out">
            Home
          </Link>

          {/* Home Icon for mobile */}
          <Link to="/" className="sm:hidden block text-lg">
            <FaHome className="text-4xl text-indigo-300" />
          </Link>

          {/* Instant Booking Button */}
          <Link
            to="/instant-booking"
            className="bg-gradient-to-r from-pink-500 to-red-500 py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-8 rounded-full text-sm sm:text-lg font-bold tracking-wide hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Instant Booking
          </Link>

          {/* Security Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            <img
              src="/images/Safex.png"
              alt="Security Icon"
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm lg:text-lg text-indigo-200 font-light">
              Safe | Sound <br className="hidden lg:block" /> Secure
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
