const db = require("../models/index");

//get all user
const getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.Product.findAll({});
      resolve({ status: "success", data: res });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAllProduct,
};
