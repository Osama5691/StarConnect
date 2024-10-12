// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./mongoose-connection");
const artistRoute = require("./Routes/artistRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", artistRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
