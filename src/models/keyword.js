"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Keyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keyword.init(
    {
      id: DataTypes.INTEGER.UNSIGNED,
      k_name: DataTypes.STRING,
      k_slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Keyword",
    }
  );
  return Keyword;
};
