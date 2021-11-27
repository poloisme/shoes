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
  .get(AuthController.getFormSignUp)
  .post(validateBody(schemas.userSchemaSignUp), AuthController.signUp);

router
  .route("/sign-in")
  .get(AuthController.getFormSignIn)
  .post(validateBody(schemas.userSchemaSignIn), AuthController.signIn);

router.route("/logout").get(AuthController.logout);

module.exports = router;
