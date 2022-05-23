const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const Image_path = path.join("/uploads/images");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    image: {
      required: true,
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// productSchema.statics.generateToken = (data, key, exprire = "10d") => {
//   return `Bearer ${jwt.sign(data.toJSON(), key, { expiresIn: exprire })}`;
// };
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", Image_path));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

productSchema.statics.uploadImage = multer({ storage: storage }).single(
  "image"
);
productSchema.statics.imagePath = Image_path;

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
