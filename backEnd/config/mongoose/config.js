const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shop")
  .then(() => console.log("Server configuration set Succesfully.... "))
  .catch(() => console.log("Oops.. There is an error in db Congig"));
