const multer = require("multer");
const path = require("path");

const storage = (pathStorage) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, pathStorage);
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
};

module.exports = storage;
