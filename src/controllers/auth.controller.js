const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { endCodedToken } = require("../util/handleJWT");

//[POST] /singup
const signUp = async (req, res, next) => {
  try {
    //Create password_hash
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(req.body.password, salt);
    //Create a User
    const user = {
      ...req.body,
      password_hash,
    };
    const response = await userService.createNewUser(user);
    const token = endCodedToken({
      id: response.data.id,
      username: response.data.username,
    });
    res.setHeader("authorization", token);
    return res.status(200).json({
      response,
    });
  } catch (err) {
    next(err);
  }
};
//[POST] /singin
const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await User.findUserByEmail(email);
    //check password
    const validPassword = await bcrypt.compare(
      password,
      response.data.password_hash
    );
    if (!validPassword) {
      const err = new Error("Invalid password!");
      err.status = 400;
      return next(err);
    }
    //get roles of user
    const roles = await Role.getRoleByUserID(response.data.id);
    //endCodeToken and set to header
    const token = endCodedToken({
      id: response.data.id,
      username: response.data.username,
      roles: roles.data,
    });
    res.setHeader("authorization", token);
    return res.status(200).json({
      response,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signUp,
  signIn,
};  
