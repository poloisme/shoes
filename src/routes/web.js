import express from "express";
const router = express.Router();

const initRoute = (app) => {
  return app.use("/", router);
};

module.exports = initRoute;
