const express = require("express");
const { config } = require("./../config/config");

const app = express();
const port = config.port;
//settings
app.set("port", port);
//
module.exports = app;
