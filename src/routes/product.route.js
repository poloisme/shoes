const express = require("express");
const router = express.Router();
const handleFile = require("../middlewares/handleFile");

const ProductController = require("../controllers/product.controller");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../middlewares/validateData");

const { authToken, authRole } = require("../middlewares/auth");

router.route("/").get(ProductController.getAll);

module.exports = router;
