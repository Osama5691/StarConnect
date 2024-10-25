import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const artists = [
  { id: 1, avatar: "/images/singer.png" },
  { id: 2, avatar: "/images/rock1.png" },
  { id: 3, avatar: "/images/d_j.png" },
  { id: 4, avatar: "/images/musician.png" },
  { id: 5, avatar: "/images/dancer.png" },
  { id: 6, avatar: "/images/comedian.png" },
  { id: 7, avatar: "/images/devotional_singer.png" },
  { id: 8, avatar: "/images/emcee.png" },
  { id: 9, avatar: "/images/celebrity.png" },
  { id: 10, avatar: "/images/variety_artist.png" },
  { id: 11, avatar: "/images/speaker.png" },
  { id: 12, avatar: "/images/magician.png" },
  { id: 13, avatar: "/images/Illusionist.png" },
];

const ArtistList = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const nextButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
    nextButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    if (selectedArtist) {
      navigate(`/book/${selectedArtist.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center py-16">
      {/* Main Container */}
      <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 bg-opacity-90 w-11/12 sm:w-4/5 rounded-3xl p-10 max-w-6xl shadow-2xl">
        {/* Header */}
        <h1 className="text-indigo-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-center">
          Choose Your Artist
        </h1>

        {/* Artist Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className={`cursor-pointer rounded-2xl p-5 bg-gradient-to-b from-gray-700 to-gray-800 shadow-xl transition-transform transform hover:scale-110
                ${
                  selectedArtist && selectedArtist.id === artist.id
                    ? "ring-4 ring-indigo-500"
                    : "hover:ring-2 hover:ring-indigo-400"
                }`}
              onClick={() => handleArtistClick(artist)}
            >
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-40 object-cover rounded-lg shadow-inner mb-3"
              />
              <h2 className="text-indigo-300 text-lg font-semibold text-center">
                {artist.name}
              </h2>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-12" ref={nextButtonRef}>
          <button
            onClick={handleNextClick}
            className={`${
              selectedArtist
                ? "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg"
                : "bg-gray-500 cursor-not-allowed"
            } text-white font-extrabold py-3 px-10 rounded-full text-lg sm:text-xl transition-transform transform hover:scale-105`}
            disabled={!selectedArtist}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
