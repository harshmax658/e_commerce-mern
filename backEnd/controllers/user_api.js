const User = require("../model/User");

const createUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return res.status(422).json({
        message: "user already exist",
      });
    } else {
      const newUser = new User({ ...req.body });
      await newUser.save();
    }
    return res.status(200).json({
      message: "registerd",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user);
      if (user.password === req.body.password) {
        console.log("match");
        return res.status(200).json({
          message: "user found",
          data: user,
        });
      }
      return res.status(422).json({
        message: "wrong password",
      });
    }
    return res.status(422).json({
      message: "user data not dound",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getAllUser = async (request, response) => {
  try {
    const user = await User.find({});
    return response.status(200).json({
      message: "User list",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports = { createUser, getUser, getAllUser };
