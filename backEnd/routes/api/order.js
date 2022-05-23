const express = require("express");
const router = express.Router();

const {
  purchaseItem,
  getOrderDetails,
  getAllOrderDataForAdmin,
} = require("../../controllers/order_api");

router.post("/create-order/:id", purchaseItem);
router.get("/get-order-data/:id", getOrderDetails);
router.get("/get-order-data", getAllOrderDataForAdmin);
module.exports = router;
