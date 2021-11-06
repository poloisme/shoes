"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      pro_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pro_slug: {
        type: Sequelize.STRING,
      },
      pro_description: {
        type: Sequelize.STRING,
      },
      pro_description_detail: {
        type: Sequelize.TEXT,
      },
      pro_hot: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      pro_new: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      pro_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(11, 2),
      },
      pro_price_old: {
        allowNull: false,
        type: Sequelize.DECIMAL(11, 2),
      },
      pro_avatar: {
        defaultValue: "no-image.jpg",
        type: Sequelize.STRING,
      },
      pro_view: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      pro_rank: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      pro_size: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      users_id_create: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "Users",
          key: "id",
        },
      },
      users_id_update: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "Users",
          key: "id",
        },
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "Brand",
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
    await queryInterface.dropTable("Product");
  },
};
