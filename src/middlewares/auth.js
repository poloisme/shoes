var jwt = require("jsonwebtoken");

//auth token
const authToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  // 'Beaer [token]'
  const token = authorizationHeader;

  if (!token) {
    const err = new Error("unauthorize!");
    err.status = 401;
    return next(err);
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
    if (error) {
      const err = new Error(error);
      err.status = 401;
      return next(err);
    }
    //send data to next middleware
    res.locals.data = data;
    return next();
  });
};
//auth admin users
const authAdmin = (req, res, next) => {
  data = res.locals.data;
  //check user_role_id === 1 is admin
  if (role.role_id === 1) {
    return next();
  } else {
    const err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
};
//auth manager users
const authManager = (req, res, next) => {
  data = res.locals.data;
  //check user_role_id === 2 is manager
  if (role.role_id === 2) {
    return next();
  } else {
    const err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
};
//auth salesclerk users
const authSalesclerk = (req, res, next) => {
  data = res.locals.data;
  //check user_role_id === 3 is salesclerk
  if (role.role_id === 3) {
    return next();
  } else {
    const err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
};

module.exports = {
  authToken,
  authAdmin,
  authManager,
  authSalesclerk,
};
