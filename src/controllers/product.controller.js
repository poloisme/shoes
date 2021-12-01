const dotenv = require("dotenv");
dotenv.config();
const productService = require("../services/product.service");

//[GET] /product
const getAll = async (req, res, next) => {
  try {
    const response = await productService.getAllProduct();
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
