const cors = (req, res, next) => {
  //URL allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL);
  //Request methods allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  //Request header allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  //Allow cookies in sent requests
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
};

module.exports = cors;
