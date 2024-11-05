const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: [String], // Assuming genre can have multiple values
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // This adds createdAt and updatedAt fields

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
