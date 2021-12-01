"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      or_date: DataTypes.DATE,
      or_total: DataTypes.DECIMAL(11, 2),
      or_name: DataTypes.STRING,
      or_phone: DataTypes.STRING,
      or_email: DataTypes.STRING,
      or_address: DataTypes.STRING,
      or_note: DataTypes.TEXT,
      or_ship: DataTypes.DECIMAL(11, 2),
      or_vat: DataTypes.DECIMAL(11, 2),
      or_in_money: DataTypes.DECIMAL(11, 2),
      or_status: DataTypes.ENUM(
        "in progress",
        "spending",
        "return",
        "delivered"
      ),
      or_pay: DataTypes.ENUM("cash", "cart"),
      or_reason: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
