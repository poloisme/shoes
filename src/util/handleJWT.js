var jwt = require("jsonwebtoken");

const enCodedToken = (data, secret) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        {
          ...data,
          iat: new Date().getTime(),
          // exp: new Date().setDate(new Date().getDate() + 1),
          exp: Math.floor(Date.now() / 1000) + 60 * 5, //5 minutes
        },
        secret
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
