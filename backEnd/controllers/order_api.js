const Order = require("../model/Order");
const User = require("../model/User");

const purchaseItem = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (user) {
      console.log("user");
      console.log(user);
      const newOrder = new Order({ ...request.body, user: user._id });
      console.log("newOrder");
      await newOrder.save();
      console.log(newOrder);
      console.log("push");
      user.orders.push(newOrder);
      console.log(user);
      await user.save();
      return response.status(200).json({
        message: "order create",
      });
    }
    return response.status(422).json({
      message: "user Not Found",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal server error",
    });
  }
};

const getOrderDetails = async (request, response) => {
  try {
    const user = await User.findById(request.params.id).populate("orders");
    if (user) {
      return response.status(200).json({
        message: "order data recieved",
        data: user.orders,
      });
    }
    return response.status(422).json({
      message: "user Not Found",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal server error",
    });
  }
};
const getAllOrderDataForAdmin = async (request, response) => {
  try {
    const orderData = await Order.find({}).populate("user");
    return response.status(200).json({
      message: "data found",
      data: orderData,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { purchaseItem, getOrderDetails, getAllOrderDataForAdmin };
