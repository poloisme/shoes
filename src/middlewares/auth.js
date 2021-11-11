var jwt = require("jsonwebtoken");

//authen token
const authenToken = (req, res, next) => {
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

//authen route users
const authenAdmin = (req, res, next) => {
  data = res.locals.data;
  data.roles.forEach((role) => {
    //check user_role_id === 1 is admin
    if (role.user_role_id === 1) {
      return next();
    } else {
      const err = new Error("Forbidden!");
      err.status = 403;
      return next(err);
    }
  });
};

module.exports = {
  authenToken,
  authenAdmin,
};
