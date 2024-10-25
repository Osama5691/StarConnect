import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    home: false,
    events: false,
    entertainers: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6">
        {/* Logo and Description */}
        <div className="mb-10 md:mb-0">
          <img src="/images/logo.png" alt="StarConnect Logo" className="h-25 mb-9" />
          <p className="text-gray-300 leading-loose">
            Discover a world of live entertainment with StarConnect.
          </p>
        </div>

        {/* Home Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-200 flex justify-between items-center md:cursor-default">
            Home
            <span className="md:hidden" onClick={() => toggleSection('home')}>
              {openSections.home ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <ul
            className={`space-y-2 text-gray-300 md:block ${
              openSections.home ? 'block' : 'hidden'
            }`}
          >
            <li><a href="#" className="hover:text-pink-400 transition-all">Why StarConnect</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">About StarConnect</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Our Clients</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Privacy</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Refund Policy</a></li>
          </ul>
        </div>

        {/* Events Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-200 flex justify-between items-center md:cursor-default">
            Events
            <span className="md:hidden" onClick={() => toggleSection('events')}>
              {openSections.events ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <ul
            className={`space-y-2 text-gray-300 md:block ${
              openSections.events ? 'block' : 'hidden'
            }`}
          >
            <li><a href="#" className="hover:text-pink-400 transition-all">Wedding</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">House Party</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Birthday</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Anniversary</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Corporate</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Private Event</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Cafe</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Blogs</a></li>
          </ul>
        </div>

        {/* Entertainers Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-200 flex justify-between items-center md:cursor-default">
            Live Entertainers
            <span className="md:hidden" onClick={() => toggleSection('entertainers')}>
              {openSections.entertainers ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <ul
            className={`space-y-2 text-gray-300 md:block ${
              openSections.entertainers ? 'block' : 'hidden'
            }`}
          >
            <li><a href="#" className="hover:text-pink-400 transition-all">Singer</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">DJs</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Music Bands</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Musicians</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Anchor/Emcee</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Dance Groups</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Celebrities</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Newsletter</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-200 flex justify-between items-center md:cursor-default">
            Contact
            <span className="md:hidden" onClick={() => toggleSection('contact')}>
              {openSections.contact ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          <ul
            className={`space-y-6 text-gray-300 md:block ${
              openSections.contact ? 'block' : 'hidden'
            }`}
          >
            <li className="flex items-center space-x-3">
              <FaPhone className="text-pink-400 text-2xl" />
              <span>9821009569</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-400 text-2xl" />
              <span>info@StarConnect.in</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <span>
                Mumbai: 3rd Floor, A Wing, Pinnacle Business Park, Building No. 18, Unit No. 301/302, Saki Vihar Road, Off Chandivali Junction, Saki Naka, Andheri (East), Mumbai - 400072. (India)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <span>
                Mumbai: 402, 4th Floor Saki Plaza, Andheri-Kurla Road, Saki Naka Junction, Andheri (East), Mumbai - 400072. (India)
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2024 StarConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
