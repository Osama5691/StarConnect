// artistRoute.js
const express = require("express");
const router = express.Router();

// Some Dummy Data (replace with MongoDB in the future)
// const artists = [
//     { id: 1, name: "Singer", avatar: "https://img.freepik.com/premium-vector/vector-illustration-singer-avatar_558677-930.jpg" },
//     { id: 2, name: "Music Band", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHoxjVR_Xo-x_gMHeTnpCTukdyqTOhaKiGg&s" },
//     { id: 3, name: "DJ", avatar: "https://c8.alamy.com/comp/2K8R4M5/cartoon-character-avatar-symbol-rapper-wearing-a-cap-vector-illustration-2K8R4M5.jpg" }
// ];

router.get("/artists", (req, res) => {
    res.json(artists);
});

module.exports = router;
