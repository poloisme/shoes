const userService = require("../services/user.service");

//[POST] /users/create
const create = async (req, res, next) => {
  try {
    const response = await userService.createNewUser(req.body);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
//[GET] /users
const getAll = async (req, res, next) => {
  try {
    const response = await userService.getAllUser();
    return res.status(200).json(response);
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
//[PUT] /:id
const update = async (req, res, next) => {
  try {
    const response = await userService.updateUser(
      { id: req.params.id },
      req.body
    );
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
//[DELETE] /:id
const remove = async (req, res, next) => {
  try {
    const response = await userService.deleteUser({ id: req.params.id });
    return res.status(200).json(response);
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
};
