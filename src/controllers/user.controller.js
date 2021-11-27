const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//[GET] /users/create
const getCreate = async (req, res, next) => {
  try {
    return res.render("users/create-user", {
      nav: "newUser",
    });
  } catch (err) {
    next(err);
  }
};
//[POST] /users/create
const create = async (req, res, next) => {
  try {
    const response = await userService.createNewUser(req.body);
    return res.status(200).redirect("/users");
  } catch (err) {
    next(err);
  }
};
//[GET] /users
const getAll = async (req, res, next) => {
  try {
    const response = await userService.getAllUser();
    return res.status(200).render("users/users", {
      users: response.data,
      nav: "users",
    });
  } catch (err) {
    next(err);
  }
};
//[GET] /users/:id
const getOne = async (req, res, next) => {
  try {
    const response = await userService.getUser({ id: req.params.id });
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
//[GET] /count
const countAndGet = async (req, res, next) => {
  try {
    const response = await userService.countAndGetUsers();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
//[GET] users/:id/edit
const getUpdate = async (req, res, next) => {
  try {
    const response = await userService.getUser({ id: req.params.id });
    return res.status(200).render("users/edit-user", { user: response.data });
  } catch (err) {
    next(err);
  }
};
//[PUT] users/:id/edit
const update = async (req, res, next) => {
  try {
    const response = await userService.updateUser(
      { id: req.params.id },
      req.body
    );
    const user = await userService.getUser({ id: req.params.id });
    return res.status(200).render("users/edit-user", {
      user: user.data,
      message: "success",
    });
  } catch (err) {
    next(err);
  }
};
//[PUT] users/:id/change-password
const changePassword = async (req, res, next) => {
  try {
    const { current_password, new_password } = req.body;
    const response = await userService.getUser({ id: req.params.id });
    //check password
    const validPassword = await bcrypt.compare(
      current_password,
      response.data.password_hash
    );
    if (!validPassword) {
      res.status(400).render("users/edit-user", {
        user: response.data,
        errorCurrentPassword: {
          message: "Invalid Password!",
          filed: "current_password",
        },
      });
    }
    //set new password
    const passwordUserUpdate = {
      password: new_password,
    };
    await userService.updateUser({ id: response.data.id }, passwordUserUpdate);
    return res.status(200).render("users/edit-user", {
      user: response.data,
      message: "success",
    });
  } catch (err) {
    next(err);
  }
};
//[PUT] users/:id/edit-avatar
const editAvatar = async (req, res, next) => {
  try {
    const response = await userService.updateUser(
      { id: req.params.id },
      req.body
    );
    const user = await userService.getUser({ id: req.params.id });
    return res.status(200).render("users/edit-user", {
      user: user.data,
      message: "success",
    });
  } catch (err) {
    next(err);
  }
};
//[DELETE] users/:id/delete
const remove = async (req, res, next) => {
  try {
    const response = await userService.deleteUser({ id: req.params.id });
    return res.status(200).send("message: success");
  } catch (err) {
    next(err);
  }
};
//[GET] users/:id/preview
const preview = async (req, res, next) => {
  try {
    const response = await userService.getUser({ id: req.params.id });
    return res
      .status(200)
      .render("users/user-preview", { user: response.data });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  countAndGet,
  update,
  remove,
  getCreate,
  getUpdate,
  changePassword,
  editAvatar,
  preview,
};
