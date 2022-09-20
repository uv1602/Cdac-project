//STYLES
import register from "../../Service/RegisterService";
import Input from "../Common/Input";
import styles from "./Register.module.scss";
import People1 from "../../pics/people1.jpg";
import React, { useState } from "react";
import RadioMaterial from "../Common/RadioMUI";
import I from "@mui/material/Input";
import TextField from "../Common/TextField";
const Signup = () => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, password, dob, cpassword, gender } =
      event.target;
    // console.log(gender.value);
    if (
      cpassword.value === password.value &&
      fname.value !== "" &&
      lname.value !== "" &&
      email.value !== ""
    ) {
      register({
        email: email.value,
        password: password.value,
        fname: fname.value,
        lname: lname.value,
        dob: dob.value,
        gender: gender.value,
      });
    } else {
      setError("**Password and confirm password should match");
    }
  };

  return (
    <div className={styles.registerbody}>
      <div className={styles.registerlogo}>
        <div>
          <img src={People1} alt="person" className={styles.avatar} />
        </div>

        <h1>Register</h1>
        <div className="text-danger">{<p>{error}</p>}</div>
        <form onSubmit={handleSubmit} method="post">
          <Input placeholder="Enter Your First Name" name="fname" />
          <Input placeholder="Enter Your Last Name" name="lname" />
          <Input placeholder="Enter Your Email" name="email" type="email" />
          <Input placeholder="Enter Your Password" name="password" />
          <Input placeholder="Enter Your Confirm Password" name="cpassword" />
          <input type="date" name="dob" />
          {/* <span style={{ marginTop: "20px" }}>
            <p> Gender :</p>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </span> */}

          <RadioMaterial name="gender" />
          <input type="submit" value="Register" />
          <span>
            {" "}
            Already have an account ? {"  "}
            <a href="/login">Click to login</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
