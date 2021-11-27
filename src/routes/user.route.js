const express = require("express");
const router = express.Router();
const handleFile = require("../middlewares/handleFile");

const UserController = require("../controllers/user.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

const { authToken, authRole } = require("../middlewares/auth");

router.route("/").get(authToken, UserController.getAll);

router
  .route("/create")
  .get(authToken, UserController.getCreate)
  .post(
    authToken,
    authRole([1]),
    handleFile("avatar"),
    validateBody(schemas.userSchemaCreate),
    UserController.create
  );

router
  .route("/:id", validateParam(schemas.idUserSchema, "id"))
  .get(authToken, UserController.getOne);

router
  .route("/:id/edit", validateParam(schemas.idUserSchema, "id"))
  .put(
    authToken,
    authRole([1]),
    validateBody(schemas.userSchemaUpdate),
    UserController.update
  )
  .get(authToken, authRole([1]), UserController.getUpdate);

router
  .route("/:id/change-password", validateParam(schemas.idUserSchema, "id"))
  .put(
    authToken,
    authRole([1]),
    validateBody(schemas.userSchemaChangePassword),
    UserController.changePassword
  );
router
  .route("/:id/edit-avatar", validateParam(schemas.idUserSchema, "id"))
  .put(
    authToken,
    authRole([1]),
    handleFile("avatar"),
    validateBody(schemas.userSchemaEditAvatar),
    UserController.editAvatar
  );

router
  .route("/:id/delete", validateParam(schemas.idUserSchema, "id"))
  .delete(authToken, authRole([1]), UserController.remove);

router
  .route("/:id/preview", validateParam(schemas.idUserSchema, "id"))
  .get(authToken, authRole([1]), UserController.preview);

module.exports = router;
