const express = require("express");
const router = express.Router();

const authRoute = require("./auth.route");
const dashboardRoute = require("./dashboard.route");
const userRoute = require("./user.route");
const chatbot = require("./chatbot.route");
const productRoute = require("./product.route");

const errorHandle = require("../middlewares/errorHandle");
const { route } = require("./auth.route");

const initRoute = (app) => {
  router.use("/", authRoute);
  router.use("/dashboard", dashboardRoute);
  router.use("/users", userRoute);
  router.use("/product", productRoute);
  // router.use("/chatbot", chatbot);

  //handle error
  router.use(errorHandle);
  return app.use("/", router);
};

module.exports = initRoute;
