const express = require("express");
const router = express.Router();
const products = require("./products");
const user = require("./user");
const complaint = require("./complaint");
const order = require("./order");

router.use("/product", products);
router.use("/user", user);
router.use("/complaint", complaint);
router.use("/order", order);
// router.get("/order", (req, res) => res.json({ s: "ss" }));

module.exports = router;
