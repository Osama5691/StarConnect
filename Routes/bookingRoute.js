// artistRoute.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking")

//route to handle booking submission
router.post("/booking", async (req,res)=>{
    try{
        const bookingData = req.body;
        const newBooking = new Booking(bookingData);
        await newBooking.save();
        res.status(201).json({message: "Booking saved successfully!"});
    }
    catch(error){
        res.status(400).jsonp({message: "Gettng Error, Booking not saved",error});
    }
    });
    

module.exports = router;
