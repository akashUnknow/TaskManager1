require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

//middleware to handel cors
app.use(
  cors({
    origin: process.env.CLIENT_URL || "",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

// /middleware
app.use(express.json);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
