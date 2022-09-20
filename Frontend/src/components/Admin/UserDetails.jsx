import { Link } from "react-router-dom";

import EditUserDetail from "./EditUserDetails";

const UserDetails = ({ user, setUserDeatils }) => {
  const { fname, lname, email, dob, uid } = user;
  return (
    <>
      <tr>
        <td>{fname}</td>
        <td>{lname}</td>
        <td>{email}</td>
        <td>{dob}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => {
              setUserDeatils({
                fname,
                lname,
                email,
                dob,
                uid,
              });
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(uid);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserDetails;
