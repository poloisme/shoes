"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      auth_key: {
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password_reset_token: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      role_id: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "Role",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
