const express = require("express");
const app = express();
const port = 3001;

const path = require("path");

app.use(express.json());

// cookieParser
const cookieParser = require("cookie-parser");

app.use(cookieParser());

require("./config/mongoose/config");

// require("./config/mongoose/config");
const routersPath = path.join(__dirname, "/routes");

app.use(require(routersPath));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`server is up and running on http://localhost:${port}`);
});
