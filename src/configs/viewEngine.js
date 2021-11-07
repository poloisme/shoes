const express = require("express");

const viewEngineConfig = (app) => {
  app.use(express.static("./src/pubic"));
  app.set("view engine", "");
  app.set("views", "./src/views");
};

module.exports = viewEngineConfig;
