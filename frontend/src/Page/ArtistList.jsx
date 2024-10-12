import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const artists = [
  { id: 1, avatar: "/images/singer.png" },
  { id: 2, avatar: "/images/music_band.png" },
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
    <div
      className="min-h-screen bg-bg-cover bg-center flex flex-col justify-center items-center py-16"
      style={{
        backgroundImage: `url(${"./images/bg.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Container */}
      <div className="bg-gradient-to-r from-[#141E30] via-[#243B55] to-[#0F2027] bg-opacity-90 w-11/12 sm:w-4/5 rounded-2xl p-10 relative max-w-6xl shadow-2xl">
        {/* Header */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold absolute left-4 sm:left-8 top-2 sm:top-4">
          Select Artist Category
        </h1>

        {/* Artist Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4 sm:gap-x-6 lg:gap-2 mt-12 sm:mt-16">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className={`cursor-pointer rounded-xl p-4 sm:p-6 lg:p-4 transition-transform transform hover:scale-105 bg-zinc-900 bg-opacity-80 shadow-lg 
                ${
                  selectedArtist && selectedArtist.id === artist.id
                    ? "ring-4 ring-red-500"
                    : "border-2 border-gray-500 hover:border-red-500"
                }  
              lg:h-48`} // Height adjusted for larger screens
              onClick={() => handleArtistClick(artist)}
            >
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-40 object-cover rounded-xl mb-2 shadow-inner"
              />
              <h2 className="text-white text-center text-lg font-semibold">
                {artist.name}
              </h2>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-8 sm:mt-10" ref={nextButtonRef}>
          <button
            onClick={handleNextClick}
            className={`${
              selectedArtist
                ? "bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:from-[#FF7043] hover:to-[#E91E63] shadow-2xl"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold py-2 sm:py-3 px-8 sm:px-10 rounded-full text-lg sm:text-xl tracking-wider transition duration-300 ease-in-out`}
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
