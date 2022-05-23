const Complaint = require("../model/Complaint");
const User = require("../model/User");

const addComplaint = async (request, response) => {
  try {
    console.log(request.body);
    const user = await User.findById(request.body.user);
    if (user) {
      const complaint = new Complaint({
        ...request.body,
        displayName: user.displayName,
        email: user.email,
      });
      await complaint.save();
      user.complaint.push(complaint);
      await user.save();
      return response.status(200).json({
        message: "complaint add",
      });
    }
    return response.status(422).json({
      message: "error while creating complaint",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Intenal Server error",
    });
  }
};
const getAllComplaint = async (request, response) => {
  try {
    const complaint = await Complaint.find({}).populate("user");

    return response.status(200).json({
      message: "All complaint",
      data: complaint,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Intenal Server error",
    });
  }
};
const getComplaintOfUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id).populate("complaint");
    console.log(user.complaint);
    return response.status(200).json({
      message: "user complaint",
      data: user.complaint,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Intenal Server error",
    });
  }
};
module.exports = { addComplaint, getAllComplaint, getComplaintOfUser };
