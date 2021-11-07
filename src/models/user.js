"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      auth_key: DataTypes.STRING,
      username: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password_rest_token: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.INTEGER.UNSIGNED,
      role_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
