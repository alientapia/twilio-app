const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const app = require("./src/app");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./src/routes/call.router");

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(router);

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
