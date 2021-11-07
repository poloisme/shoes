const userService = require("../services/user.service");

const create = async (req, res, next) => {
  try {
    const response = await userService.createNewUser(req.body);
    return res.status(200).json({ response });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
