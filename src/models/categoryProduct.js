"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryProduct.init(
    {
      id: DataTypes.INTEGER.UNSIGNED,
      order_id: DataTypes.INTEGER.UNSIGNED,
      product_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "CategoryProduct",
    }
  );
  return CategoryProduct;
};