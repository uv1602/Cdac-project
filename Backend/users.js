const express = require("express");
const db = require("./db/db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");
const app = express.Router();

require("dotenv").config();

app.post("/api/login", (request, response) => {
  const { email, password } = request.body;
  const encryptedPassword = "" + crypto.SHA256(password);
  console.log(email, encryptedPassword);
  const statement = `select uid,fname,lname,dob,gender,email from user where email="${email}" and password='${encryptedPassword}';`;
  try {
    db.execute(statement, (err, data) => {
      // console.log(data, " ", err);
      const result = { status: "" };
      if (err != null) {
        result["status"] = "error";
        result["error"] = err;
      } else {
        if (data.length == 0) {
          result["status"] = "error";
          result["error"] = "user dosen't exist";
        } else {
          const user = data[0];
          const token = jwt.sign(user, process.env.SECRET);
          result["status"] = "success";
          result["token"] = token;
          console.log(user);
        }
      }
      response.send(result);
    });
  } catch (error) {
    console.log(error);
    //res.send();
  }
});

app.post("/api/register", (request, response) => {
  console.log(request.body);
  const { fname, lname, email, password, dob, gender } = request.body;
  const encryptedPassword = "" + crypto.SHA256(password);
  const statement = `insert into user (fname, lname, email, password, dob ,gender) values ("${fname}","${lname}","${email}","${encryptedPassword}","${dob}","${gender}");`;
  try {
    db.execute(statement, (error, data) => {
      const result = {
        status: "",
      };

      if (error != null) {
        // there is an error while performing the operation
        result["status"] = "error";
        result["error"] = "User already registered";
        response.status(400);
      } else {
        // there is no error
        const user = {
          fname: fname,
          lname: lname,
          email: email,
          password: password,
        };
        const token = jwt.sign(user, process.env.SECRET);
        result["status"] = "success";
        result["token"] = token;
        console.log("New user added");
      }
      response.send(result);
    });
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = app;
