"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      or_date: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      or_total: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DECIMAL(11, 2),
      },
      or_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      or_phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      or_email: {
        type: Sequelize.STRING,
      },
      or_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      or_note: {
        type: Sequelize.TEXT,
      },
      or_ship: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DECIMAL(11, 2),
      },
      or_vat: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DECIMAL(11, 2),
      },
      or_in_money: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DECIMAL(11, 2),
      },
      or_status: {
        allowNull: false,
        defaultValue: "spending",
        type: Sequelize.ENUM("in progress", "spending", "return", "delivered"),
      },
      or_pay: {
        allowNull: false,
        defaultValue: "cash",
        type: Sequelize.ENUM("cash", "cart"),
      },
      or_reason: {
        type: Sequelize.TEXT,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Order");
  },
};
