const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    event:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    locationType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    budget:{
        type: String,
        required: true,
    } 
})

module.exports = mongoose.model("Booking", bookingSchema)