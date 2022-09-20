import { Link } from "react-router-dom";
import styles from "./Admin.module.scss";

const UserDetails = ({ fname, lname, email, dob, uid }) => {
  const handleClick = (uid) => {
    console.log(uid);
  };
  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{email}</td>
      <td>{dob}</td>
      <td>
        <Link to="/edit">
          <button className="btn btn-success">Edit</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleClick(uid)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserDetails;
