const express = require("express");
const router = express.Router();

const {
  AddProduct,
  getProducts,
  getAllProduct,
  deleteProduct,
} = require("../../controllers/product_api");

router.post("/create", AddProduct);
router.get("/get-product", getAllProduct);
router.get("/:category", getProducts);
router.get("/delete/:id", deleteProduct);

module.exports = router;
