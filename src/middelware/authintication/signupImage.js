const multer = require("multer");

storage = new multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

upload = multer({ storage: storage }).single("image");

module.exports = upload;
