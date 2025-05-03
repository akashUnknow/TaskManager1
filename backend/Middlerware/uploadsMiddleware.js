const multer = require("multer");

// configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//file filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // file is valid
  } else {
    cb(
      new Error("Invalid file type. Only JPEG and PNG files are allowed."),
      false
    ); // file is invalid
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
