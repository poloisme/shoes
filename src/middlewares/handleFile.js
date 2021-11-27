const path = require("path");
const multer = require("multer");
const imgFilter = require("../util/imgFilter");
const storageDiskFile = require("../util/storageDiskFile");

const handleFile = (fieldName) => {
  let upload = multer({
    storage: storageDiskFile(
      path.join(__dirname, "../public/assets/img/avatar-user")
    ),
    fileFilter: imgFilter,
  }).single(fieldName);

  return (req, res, next) => {
    try {
      upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        // console.log(req.file);
        // console.log(req.body);

        if (req.fileValidationError) {
          throw new Error(req.fileValidationError);
        } else if (!req.file) {
          throw new Error("Please select an image to upload");
        } else if (err instanceof multer.MulterError) {
          throw new Error(err);
        } else if (err) {
          throw new Error(err);
        }
        req.body.avatar = req.file.filename;
        next();
      });
    } catch (err) {
      next(err);
    }
  };
};

module.exports = handleFile;
