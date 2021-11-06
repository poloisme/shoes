"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailOrder.init(
    {
      id: DataTypes.INTEGER.UNSIGNED,
      quantity: DataTypes.INTEGER(3).UNSIGNED,
      order_id: DataTypes.INTEGER.UNSIGNED,
      product_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "DetailOrder",
    }
  );
  return DetailOrder;
};
