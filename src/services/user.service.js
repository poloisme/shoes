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
        avatar: newUser.avatar || "default-avatar.jpg",
        username: newUser.username,
        password_hash: password_hash,
        email: newUser.email,
        status: newUser.status || 1,
        roles_id: newUser.roles_id || 4,
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
        attributes: ["id", "avatar", "username", "email", "status", "roles_id"],
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
        attributes: [
          "id",
          "avatar",
          "username",
          "password_hash",
          "email",
          "status",
          "roles_id",
        ],
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
        attributes: ["username", "email", "status", "roles_id"],
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
      const { password } = user;
      if (password) {
        //Create password_hash
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);
        user = { ...user, password_hash };
      }
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
//get field users
const getFieldUsers = (field) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.findAll({
        attributes: field,
      });
      resolve({ status: "success", data: res });
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
  getFieldUsers,
};
