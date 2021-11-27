const express = require("express");
const router = express.Router();

// const UserController = require("../controllers/user.controller");

const { authToken, authRole } = require("../middlewares/auth");

router.route("/").get((req, res) => {
  res.render("dashboard/dashboard", { nav: "dashboard" });
});

module.exports = router;
