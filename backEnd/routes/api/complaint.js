const express = require("express");
const router = express.Router();

const {
  addComplaint,
  getAllComplaint,
  getComplaintOfUser,
} = require("../../controllers/complaint_api");

router.post("/add-complaint", addComplaint);
router.get("/get-complaint", getAllComplaint);
router.get("/get-complaint-of-user/:id", getComplaintOfUser);

module.exports = router;
