const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

router
  .route("/create")
  .post(validateBody(schemas.userSchemaCreate), UserController.create);

module.exports = router;
