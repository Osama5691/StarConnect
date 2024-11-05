const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

// Route to get artists by category
router.get('/artists', async (req, res) => {
    const category = req.query.category;
    try {
        const artists = category 
            ? await Artist.find({ genre: { $in: [category] } }) 
            : await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to add a new artist
router.post('/add-Artists', async (req, res) => {
    const { name, genre, image, description } = req.body;
    const newArtist = new Artist({ name, genre, image, description });

    try {
        const savedArtist = await newArtist.save();
        res.status(201).json(savedArtist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
