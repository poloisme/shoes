"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Slider.init(
    {
      id: DataTypes.INTEGER.UNSIGNED,
      s_caption: DataTypes.STRING,
      s_description: DataTypes.STRING,
      s_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Slider",
    }
  );
  return Slider;
};
