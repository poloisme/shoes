const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { enCodedToken, deCodedToken } = require("../util/handleJWT");

//[POST] /sing-up
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
    const token = await enCodedToken(
      {
        id: response.data.id,
        username: response.data.username,
        role_id: response.data.role_id,
      },
      process.env.JWT_SECRET
    );
    res.cookie("authorization", token);
    return res.status(200).redirect("dashboard");
  } catch (err) {
    next(err);
  }
};
//[POST] /sign-in
const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //check emails
    const emails = await userService.getFieldUsers(["email"]);
    let listEmails = [];
    emails.data.forEach((e) => {
      listEmails.push(e.email);
    });
    if (!listEmails.includes(email)) {
      res.render("sign-in", {
        errorEmail: {
          message: "Invalid email!",
          filed: "email",
        },
      });
    }
    //check password
    const response = await userService.getUser({ email });
    const validPassword = await bcrypt.compare(
      password,
      response.data.password_hash
    );
    if (!validPassword) {
      res.render("sign-in", {
        errorPassword: {
          message: "Invalid Password!",
          filed: "password",
        },
      });
    }
    //endCodeToken and set to header
    const token = await enCodedToken(
      {
        id: response.data.id,
        username: response.data.username,
        role_id: response.data.role_id,
      },
      process.env.JWT_SECRET
    );
    res.cookie("authorization", token, {
      maxAge: parseInt(process.env.TIME_EXP) * 1000 * 60,
    });
    res.cookie("username", response.data.username, {
      maxAge: parseInt(process.env.TIME_EXP) * 1000 * 60,
    });
    res.cookie("avatar", response.data.avatar, {
      maxAge: parseInt(process.env.TIME_EXP) * 1000 * 60,
    });
    //set status online
    const statusUserUpdate = {
      status: 10,
    };
    await userService.updateUser({ id: response.data.id }, statusUserUpdate);
    return res.status(200).redirect("dashboard");
  } catch (err) {
    next(err);
  }
};
//[GET] /sign-in
const getFormSignIn = (req, res, next) => {
  try {
    return res.render("sign-in");
  } catch (err) {
    next(err);
  }
};
//[GET] /sign-up
const getFormSignUp = (req, res, next) => {
  try {
    return res.render("sign-up");
  } catch (err) {
    next(err);
  }
};
//[GET] /logout
const logout = async (req, res, next) => {
  try {
    const authorizationCookie = req.cookies.authorization;
    // 'Beaer [token]'
    const token = authorizationCookie;
    const data = await deCodedToken(token, process.env.JWT_SECRET);
    //set status offline
    const statusUserUpdate = {
      status: 1,
    };
    await userService.updateUser({ id: data.id }, statusUserUpdate);
    res.clearCookie("authorization");
    res.clearCookie("username");
    res.clearCookie("avatar");
    res.redirect("dashboard");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  signUp,
  signIn,
  getFormSignIn,
  getFormSignUp,
  logout,
};
