const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");

const initRoute = (app) => {
  router.use("/users", userRoute);

  return app.use("/", router);
};

module.exports = initRoute;
