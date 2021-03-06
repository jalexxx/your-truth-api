const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const postsRoutes = require("./routes/postsRoutes");
server.use("/posts", postsRoutes);

// Root route
server.get("/", (req, res) => res.send("Welcome to your-truth-api!"));

module.exports = server;
