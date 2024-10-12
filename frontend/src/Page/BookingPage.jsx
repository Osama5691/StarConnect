// src/components/BookingPage.js
import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
    const { id } = useParams();

    return (
        <section className="flex justify-center items-center min-h-screen p-4 sm:p-10 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="bg-[#0E182A] p-6 sm:p-12 rounded-[20px] sm:rounded-[50px] shadow-lg w-full max-w-[1000px]">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Event Details</h3>
                <h5 className="text-gray-400 font-bold mb-6 sm:mb-8">Selected category: SINGER</h5>
                <form className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="name"
                                type="text"
                                placeholder="Enter Name Here"
                            />
                        </div>
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="mobile">Mobile Number</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="mobile"
                                type="text"
                                placeholder="+91 | Enter Mobile Number Here"
                            />
                        </div>
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="Enter Email Here"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                        >
                            <option>Select Genre</option>
                            <option>Pop</option>
                            <option>Rock</option>
                            <option>Jazz</option>
                        </select>
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                        >
                            <option>Select Event</option>
                            <option>Wedding</option>
                            <option>Corporate Event</option>
                            <option>Concert</option>
                        </select>
                        <input
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                            type="date"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                        >
                            <option>Location Type</option>
                            <option>Indoor</option>
                            <option>Outdoor</option>
                        </select>
                        <input
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                            type="text"
                            placeholder="Enter Location Here"
                        />
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                        >
                            <option>Select Budget</option>
                            <option>$500 - $1000</option>
                            <option>$1000 - $5000</option>
                            <option>$5000+</option>
                        </select>
                    </div>
                    <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                        <button
                            className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full focus:outline-none transition duration-300"
                            type="button"
                        >
                            Go Back
                        </button>
                        <button
                            className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full focus:outline-none transition duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookingPage;
