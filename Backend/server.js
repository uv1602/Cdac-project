// importing
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const userRouter = require("./users");
const expenseRouter = require("./Expense");

// create instance
const app = express();
app.options("*", cors());
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use((request, response, next) => {
  console.log(request.url);
  if (
    request.url == "/" ||
    request.url == "/api/login" ||
    request.url == "/api/register"
  ) {
    next();
  } else {
    // get the toekn from header
    const token = request.headers["x-token"];
    try {
      // verify if then token is original or intact
      const payload = jwt.verify(token, process.env.SECRET);
      request.userID = payload.uid;
      next();
    } catch (ex) {
      console.log(ex);
      response.send({
        status: "error",
        error: "unauthorized access",
      });
    }
  }
});

app.use(userRouter);
app.use(expenseRouter);

app.get("/", (req, res) => {
  console.log("get method");
  res.send("get");
});

app.post("/", (req, res) => {
  console.log("post method");
  res.send("post");
});

// listening port
app.listen(process.env.PORT, () => {
  console.log(`Backend is started at Port no ${process.env.PORT}`);
});
