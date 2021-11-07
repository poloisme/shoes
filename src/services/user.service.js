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
      resolve({ status: "success", message: `create new user: ${user.id}` });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewUser,
};
