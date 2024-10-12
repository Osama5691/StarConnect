import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the Home icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#F97316] via-[#E0297B] to-[#4B34DC] text-white py-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 h-20 lg:h-24">
        {/* Adjusted height for responsive screens */}
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"  // Replace with the correct path for your logo
            alt="StarConnect Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full object-cover shadow-xl"
            // Adjusted the logo size for smaller screens
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6 sm:space-x-8 lg:space-x-12 items-center">
          {/* Adjusted space between items for different screen sizes */}

          {/* Display Home Link on large screens */}
          <Link to="/" className="hidden sm:inline-block text-sm sm:text-lg font-semibold hover:text-gray-300 transition duration-200 ease-in-out">
            Home
          </Link>

          {/* Display Home Icon on mobile screens with increased size */}
          <Link to="/" className="sm:hidden block text-lg">
            <FaHome className="text-4xl" /> {/* Increased icon size to 4xl for better visibility */}
          </Link>

          {/* Instant Booking Button */}
          <Link
            to="/instant-booking"
            className="bg-gradient-to-r from-[#FF512F] to-[#F09819] py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-8 rounded-full text-sm sm:text-lg font-bold tracking-wide hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Instant Booking
          </Link>

          {/* Security Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Hide on mobile screens */}
            <div className="text-lg sm:text-2xl text-[#FFD700]">=</div>
            <img
              src="/images/Safex.png"
              alt="Security Icon"
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white"
            />
            <span className="text-xs sm:text-sm lg:text-lg font-light">
              Safe | Sound <br className="hidden lg:block" /> Secure
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
