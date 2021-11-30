const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");

const enCodedToken = (data, secret) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        {
          ...data,
          iat: new Date().getTime(),
        },
        secret,
        { expiresIn: parseInt(process.env.TIME_EXP) * 1000 * 60 }
      );
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};

const deCodedToken = (token, secret) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await jwt.verify(token, secret);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  enCodedToken,
  deCodedToken,
};
