const { response } = require("express");
const express = require("express");
const db = require("./db/db");
const app = express.Router();

require("dotenv").config();

app.get("/api/admin/show", (req, res) => {
  try {
    db.execute(
      `select uid,fname,lname,email,dob,gender,status,role from user where status =0 ;`,
      (err, data) => {
        const result = { status: "" };
        if (err != null) {
          result["status"] = "error";
          result["error"] = err;
        } else {
          if (data.length == 0) {
            result["status"] = "error";
            result["error"] = "No un-verfied user found";
          } else {
            result["status"] = "success";
            result["result"] = data;
          }
        }
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/admin/delete/:uid", (req, res) => {
  const { uid } = req.params;
  //   const { uid } = req.body;
  console.log(uid);
  try {
    db.execute(`delete from user where uid=${uid};`, (err, data) => {
      const result = { status: "" };
      if (err != null) {
        result["status"] = "error";
        result["error"] = err;
      } else {
        if (data.length == 0) {
          result["status"] = "error";
          result["error"] = "User not found";
        } else {
          result["status"] = "success";
          result["result"] = "User is delete successfully";
        }
      }
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
