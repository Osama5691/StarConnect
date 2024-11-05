// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./mongoose-connection");
 require('cors');
const artistRoute = require("./Routes/artistRoute");
const bookingRoute = require("./Routes/bookingRoute");
const artists =require("./Routes/artists")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", artistRoute);
app.use("/api", bookingRoute);
app.use("/api", artists);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
