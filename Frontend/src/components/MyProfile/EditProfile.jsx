import style from "../Common/Dashboard.module.scss";
import styles from "../Team/Team.module.scss";
import People1 from "../../pics/people1.jpg";
import Label from "./Label";
import Button from "../Common/Button";
import { useState } from "react";



const Card = ({ person_image, user }) => {
    
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.photo_container}>
          <img src={person_image} alt="person" />
        </div>
        <span className={styles.name}>
          {user.fname + " " + user.lname}
        </span>
      </div>
      <table className="table table-hover table-striped ">
        <form></form>
        <tbody>
          <Label title={"First Name"} value={user.fname}  />
          <Label title={"Last Name"} value={user.lname}  />
          <Label title={"Gender"} value={user.gender}  />
          <Label title={"Mail "} value={user.email}  />
          <Label title={"Date of Birth"} value={user.dob} />
        </tbody>
      </table>
    </div>
  );
};

const Profile = ({user}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <main>
      <div className={style.box}>
        <Card person_image={People1} user={user} value={isEdit} />
        {console.log(user)}
      </div>
    </main>
  );
};

export default Profile;
