const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const Avatar_path = path.join("/uploads/user/avatar");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,

      min: 3,
    },
    displayName: {
      type: String,
      required: true,
    },
    complaint: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
