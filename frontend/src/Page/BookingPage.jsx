import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        genre: "",
        event: "",
        date: "",
        locationType: "",
        location: "",
        budget: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/booking", formData);
            alert("Booking saved successfully");
        } catch (error) {
            alert("Error saving booking");
            console.error(error);
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen p-4 sm:p-10 bg-gradient-to-b from-purple-900 via-gray-900 to-indigo-900">
            <div className="bg-[#0E182A] p-6 sm:p-12 rounded-[20px] sm:rounded-[50px] shadow-lg w-full max-w-[1000px]">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Event Details</h3>
                <h5 className="text-gray-400 font-bold mb-6 sm:mb-8">Selected category: SINGER</h5>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter Name Here"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="mobile">Mobile Number</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="mobile"
                                name="mobile"
                                type="text"
                                placeholder="+91 | Enter Mobile Number Here"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full sm:w-1/3">
                            <label className="block text-gray-300 font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="w-full p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Email Here"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                        >
                            <option>Select Genre</option>
                            <option>Bollywood</option>
                            <option>Western</option>
                            <option>Bhajan</option>
                            <option>Sufi</option>
                            <option>Jazz</option>
                            <option>Hip-Hop</option>
                            <option>Jazz</option>
                            <option>Rap</option>
                            <option>Ghazal</option>
                            <option>Jazz</option>
                            <option>Punjabi</option>
                            <option>Classic</option>
                            <option>Folk regional</option>
                            <option>Rock</option>
                            <option>Marathi</option>
                            <option>Devotional</option>
                            <option>Bollywood retro</option>
                            <option>POP</option>
                            <option>Qawwali</option>
                            <option>INDIE</option>
                            <option>Showreel</option>
                            <option>Jazz</option>
                            <option>Mehendi</option>
                            <option>Tamil</option>
                            <option>Telgu</option>
                            <option>Malyalam</option>
                            <option>Kannada</option>
                            <option>Garba</option>
                        </select>
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                        >
                            <option>Select Event</option>
                            <option>Wedding</option>
                            <option>Corporate Event</option>
                            <option>Concert</option>
                            <option>Private Event</option>
                            <option>House Party</option>
                            <option>Cafes & Lounges</option>
                            <option>Hotels & Villa's</option>
                            <option>Social Event</option>
                            <option>Virtual Event</option>
                        </select>
                        <input
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                            name="locationType"
                            value={formData.locationType}
                            onChange={handleChange}
                        >
                            <option>Location Type</option>
                            <option>Indoor</option>
                            <option>Outdoor</option>
                            <option>Banquet</option>
                            <option>House</option>
                            <option>Cafe & Resturant</option>
                            <option>Virtual</option>
                        </select>
                        <input
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 placeholder-gray-500 focus:outline-none"
                            type="text"
                            name="location"
                            placeholder="Enter Location Here"
                            value={formData.location}
                            onChange={handleChange}
                        />
                        <select
                            className="w-full sm:w-1/3 p-3 sm:p-4 rounded-full bg-[#303B52] text-gray-300 focus:outline-none"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
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
