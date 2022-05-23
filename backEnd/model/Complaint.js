const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const Avatar_path = path.join("/uploads/user/avatar");

const complaintSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
      min: 3,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
