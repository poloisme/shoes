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
      quantity: DataTypes.INTEGER(3).UNSIGNED,
      orders_id: DataTypes.INTEGER.UNSIGNED,
      products_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "DetailOrder",
    }
  );
  return DetailOrder;
};
