const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const departmentsRouter = require('../departments/router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/departments', departmentsRouter);

server.get("/", (req, res) => {
  res.json({ message: "The server is up and running" });
});

module.exports = server;
