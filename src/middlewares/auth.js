const { deCodedToken } = require("../util/handleJWT");

//auth token
const authToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    // 'Beaer [token]'
    const token = authorizationHeader;

    if (!token) {
      const err = new Error("unauthorize!");
      err.status = 401;
      return next(err);
    }
    const data = await deCodedToken(token, process.env.JWT_SECRET);
    //send data to next middleware
    res.locals.data = data;
    next();
  } catch (err) {
    next(err);
  }
};
//auth admin users
const authRole = (roles) => {
  return (req, res, next) => {
    try {
      const data = res.locals.data;
      if (roles.includes(data.role_id)) {
        return next();
      } else {
        const err = new Error("Forbidden!");
        err.status = 403;
        return next(err);
      }
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  authToken,
  authRole,
};
