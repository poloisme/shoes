const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

router.route("/").get(UserController.getAll);

router.route("/count").get(UserController.countAndGet);

router
  .route("/create")
  .post(validateBody(schemas.userSchemaCreate), UserController.create);

router
  .route("/:id", validateParam(schemas.idUserSchema, "id"))
  .get(UserController.getOne)
  .put(validateBody(schemas.userSchemaUpdate), UserController.update)
  .delete(UserController.remove);

module.exports = router;
