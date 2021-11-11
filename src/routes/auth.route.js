const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

router
  .route("/sign-up")
  .post(validateBody(schemas.userSchemaSignUp), AuthController.signUp);

router
  .route("/sign-in")
  .post(validateBody(schemas.userSchemaSignIn), AuthController.signIn);

module.exports = router;
