import React from "react";
import { FaPhoneAlt, FaHeadset, FaEnvelope, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const InstantBooking = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 min-h-screen"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full lg:flex-row flex-col">

        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-white p-12 lg:p-16 space-y-6">
          {/* Title and Info */}
          <div className="font-serif text-6xl lg:text-7xl font-extrabold text-white mt-4 animate__animated animate__fadeIn">
            Contact Us
          </div>
          <p className="text-xl lg:text-2xl font-semibold animate__animated animate__fadeIn animate__delay-1s">
            Kindly fill the details and<br />we will get back to you
          </p>

          {/* Get in Touch Info */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg mt-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
              {/* Inquiry Helpline */}
              <div className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300">
                <FaPhoneAlt className="text-4xl mb-4 hover:text-red-400"/>
                <div className="font-semibold">Inquiry Helpline</div>
                <div>9821009569</div>
              </div>
              {/* Artist Helpline */}
              <div className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300">
                <FaHeadset className="text-4xl mb-4 hover:text-red-400"/>
                <div className="font-semibold">Artist Helpline</div>
                <div>+919319145394</div>
              </div>
              {/* Email */}
              <div className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300">
                <FaEnvelope className="text-4xl mb-4 hover:text-red-400"/>
                <div className="font-semibold">Email</div>
                <div>info@live101.in</div>
              </div>
              {/* Follow Us */}
              <div className="flex flex-col items-center">
                <div className="flex space-x-4 mb-4">
                  <FaFacebookF className="text-4xl hover:text-red-400 transition duration-300" />
                  <FaYoutube className="text-4xl hover:text-red-400 transition duration-300" />
                  <FaInstagram className="text-4xl hover:text-red-400 transition duration-300" />
                </div>
                <div className="font-semibold">Follow Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-lg shadow-lg w-full max-w-lg transition-transform transform hover:scale-105 duration-300">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="text-white block mb-2">Name<span className="text-red-500">*</span></label>
                  <input type="text" className="w-full p-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter Name Here" />
                </div>

                {/* City */}
                <div>
                  <label className="text-white block mb-2">City</label>
                  <select className="w-full p-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500">
                    <option>Select City</option>
                    <option>City 1</option>
                    <option>City 2</option>
                  </select>
                </div>
              </div>

              {/* Mobile and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-white block mb-2">Mobile<span className="text-red-500">*</span></label>
                  <input type="text" className="w-full p-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter Number Here" />
                </div>

                <div>
                  <label className="text-white block mb-2">Email<span className="text-red-500">*</span></label>
                  <input type="email" className="w-full p-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500" placeholder="Your Email ID" />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="text-white block mb-2">Your Message</label>
                <textarea className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter Message Here"></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-red-500 text-white py-4 rounded-full font-bold hover:bg-red-600 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantBooking;
