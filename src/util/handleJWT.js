var jwt = require("jsonwebtoken");

const endCodedToken = (data) => {
  return jwt.sign(
    {
      ...data,
      iat: new Date().getTime(),
      // exp: new Date().setDate(new Date().getDate() + 1),
      exp: Math.floor(Date.now() / 1000) + 60, //1 minutes
    },
    process.env.JWT_SECRET
  );
};

module.exports = {
  endCodedToken,
};
