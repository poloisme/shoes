const db = require("../models/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//create new user
const createNewUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      //Create password_hash
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(newUser.password, salt);

      const user = await db.User.create({
        username: newUser.username,
        password_hash: password_hash,
        email: newUser.email,
        status: newUser.status || 10,
        role_id: newUser.role_id || 4,
      });
      resolve({
        status: "success",
        message: `create new user: ${user.id}`,
        data: user,
      });
    } catch (err) {
      reject(err);
    }
  });
};
//get all user
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.findAll({
        attributes: ["username", "email", "status", "role_id"],
      });
      resolve({ status: "success", data: res });
    } catch (err) {
      reject(err);
    }
  });
};
//get user by id
const getUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.findOne({
        attributes: ["username", "password_hash", "email", "status", "role_id"],
        where: { ...data },
      });
      if (res === null) {
        throw new Error("User not found!");
      }
      resolve({ status: "success", data: res });
    } catch (err) {
      reject(err);
    }
  });
};
//count users
const countAndGetUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.User.findAndCountAll({
        attributes: ["username", "email", "status", "role_id"],
        // offset: 10, same skip
        // limit: 1,
      });
      resolve({ status: "success", data: { count, rows } });
    } catch (err) {
      reject(err);
    }
  });
};
//update user
const updateUser = (data, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.update(
        { ...user },
        {
          where: { ...data },
        }
      );
      if (res < 1) {
        throw new Error("Update fail!");
      }
      resolve({
        status: "success",
        message: `update ${res} row`,
      });
    } catch (err) {
      reject(err);
    }
  });
};
//delete user
const deleteUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.destroy({
        where: { ...data },
      });
      if (res < 1) {
        throw new Error("Remove fail!");
      }
      resolve({ status: "success", message: `remove ${res} row` });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
  getUser,
  countAndGetUsers,
  updateUser,
  deleteUser,
};
