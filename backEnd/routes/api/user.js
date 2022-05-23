const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getAllUser,
} = require("../../controllers/user_api");

router.get("/get-all-user", getAllUser);
router.post("/get-user", getUser);
router.post("/create-user", createUser);

module.exports = router;
