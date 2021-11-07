"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      pro_name: DataTypes.STRING,
      pro_slug: DataTypes.STRING,
      pro_description: DataTypes.STRING,
      pro_description_detail: DataTypes.TEXT,
      pro_hot: DataTypes.BOOLEAN,
      pro_new: DataTypes.BOOLEAN,
      pro_price: DataTypes.DECIMAL(11, 2),
      pro_price_old: DataTypes.DECIMAL(11, 2),
      pro_avatar: DataTypes.STRING,
      pro_view: DataTypes.INTEGER.UNSIGNED,
      pro_rank: DataTypes.INTEGER.UNSIGNED,
      pro_size: DataTypes.STRING,
      users_id_create: DataTypes.INTEGER.UNSIGNED,
      users_id_update: DataTypes.INTEGER.UNSIGNED,
      brand_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
