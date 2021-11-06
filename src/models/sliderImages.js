"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SliderImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SliderImages.init(
    {
      id: DataTypes.INTEGER.UNSIGNED,
      file: DataTypes.STRING,
      slider_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "SliderImages",
    }
  );
  return SliderImages;
};
