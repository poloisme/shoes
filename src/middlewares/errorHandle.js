const errorHandle = (err, req, res, next) => {
  err.status = err.status || 500;

  // ObjectID: not found
  if (err.kind === "ObjectID") {
    err.status = 404;
    err.message = `The ${req.originalUrl} is not found because wrong id`;
  }

  //Duplication
  if (err.message && err.message.code == "ER_DUP_ENTRY") {
    err.message = err.message.sqlMessage;
  }

  //res to client
  res.status(err.status).json({
    error: {
      status: "fail",
      message: err.message,
    },
  });
};

module.exports = errorHandle;
