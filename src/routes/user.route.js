const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

const { authToken, authRole } = require("../middlewares/auth");

router.route("/").get(authToken, UserController.getAll);

router.route("/count").get(authToken, UserController.countAndGet);

router
  .route("/create")
  .post(
    authToken,
    authRole([1]),
    validateBody(schemas.userSchemaCreate),
    UserController.create
  );

router
  .route("/:id", validateParam(schemas.idUserSchema, "id"))
  .get(authToken, UserController.getOne)
  .put(
    authToken,
    authRole([1]),
    validateBody(schemas.userSchemaUpdate),
    UserController.update
  )
  .delete(authToken, authRole([1]), UserController.remove);

module.exports = router;
