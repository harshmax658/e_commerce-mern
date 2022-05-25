const mongoose = require("mongoose");
const url = `mongodb+srv://k123:K123@cluster0.zuw7a.mongodb.net/shop?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => console.log("Server configuration set Succesfully.... "))
  .catch(() => console.log("Oops.. There is an error in db Congig"));
