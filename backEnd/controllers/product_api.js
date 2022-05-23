const Product = require("../model/Product");

const AddProduct = async (request, response) => {
  try {
    Product.uploadImage(request, response, async (error) => {
      if (error) {
        console.log(error);
        return response.status(400).json({
          msessage: "error while createing a post",
        });
      }
      console.log(request.file);
      const product = new Product({
        name: request.body.name,
        category: request.body.category.toLowerCase(),
        price: request.body.price,
        image: request.file.filename,
      });
      console.log(product);
      await product.save();
      return response.status(200).json({
        message: "Product add",
      });
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getProducts = async (request, response) => {
  try {
    console.log(request.params.category);
    const product = await Product.find({ category: request.params.category });
    if (product) {
      return response.status(200).json({
        message: "Found",
        data: product,
      });
    } else {
      return response.status(422).json({
        message: "not Found",
        data: product,
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({
      message: "product list",
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const deleteProduct = async (request, response) => {
  try {
    const product = await Product.findById(request.params.id);

    if (product) {
      await Product.deleteOne({ _id: product.id });
      return response.status(200).json({
        message: "Item Delete",
      });
    }
    return response.status(422).json({
      message: "Not found",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = { AddProduct, getProducts, getAllProduct, deleteProduct };
