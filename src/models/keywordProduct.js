"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KeywordProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KeywordProduct.init(
    {
      keywords_id: DataTypes.INTEGER.UNSIGNED,
      products_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "KeywordProduct",
    }
  );
  return KeywordProduct;
};
