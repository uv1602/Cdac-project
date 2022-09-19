//STYLES
import register from "../../Service/RegisterService";
import Input from "../Common/Input";
import styles from "./Register.module.scss";
import People1 from "../../pics/people1.jpg";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, password, dob, cpassword, gender } =
      event.target;
    if (cpassword.value === password.value) {
      register({
        email: email.value,
        password: password.value,
        fname: fname.value,
        lname: lname.value,
        dob: dob.value,
        gender: gender.value,
      });
    } else {
      // setError("Password and confirm password should match");
    }
  };

  return (
    <div className={styles.registerbody}>
      <div className={styles.registerlogo}>
        <div>
          <img src={People1} alt="person" className={styles.avatar} />
        </div>

        <h1>Register</h1>
        <div className="text-danger">
          {/* <h6>{error}</h6>
          <h5>{error}</h5> */}
        </div>
        <form onSubmit={handleSubmit} method="post">
          <Input placeholder="Enter Your First Name" name="fname" />
          <Input placeholder="Enter Your Last Name" name="lname" />
          <Input placeholder="Enter Your Email" name="email" type="email" />
          <Input placeholder="Enter Your Password" name="password" />
          <Input placeholder="Enter Your Confirm Password" name="cpassword" />
          <Input
            placeholder="Enter Your Date of birth"
            type="date"
            name="dob"
          />
          <span>
            <p> Gender :</p>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </span>
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
