const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

const { authToken, authAdmin } = require("../middlewares/auth");

router.route("/").get(authToken, UserController.getAll);

router.route("/count").get(authToken, UserController.countAndGet);

router
  .route("/create")
  .post(
    authToken,
    authAdmin,
    validateBody(schemas.userSchemaCreate),
    UserController.create
  );

router
  .route("/:id", validateParam(schemas.idUserSchema, "id"))
  .get(authToken, UserController.getOne)
  .put(
    authToken,
    authAdmin,
    validateBody(schemas.userSchemaUpdate),
    UserController.update
  )
  .delete(authToken, authAdmin, UserController.remove);

module.exports = router;
