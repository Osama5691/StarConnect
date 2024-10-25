// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";  // Import the Home component
import ArtistList from "./Page/ArtistList";
import BookingPage from "./Page/BookingPage";
import Navbar from "./Page/Navbar";
import InstantBooking from "./Page/InstantBooking";
import Footer from "./Page/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />} /> {/* Use Home component here */}
          <Route path="/artist-list" element={<ArtistList />} /> {/* Moved ArtistList to a different path */}
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/instant-booking" element={<InstantBooking />} /> {/* New route for InstantBooking */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
