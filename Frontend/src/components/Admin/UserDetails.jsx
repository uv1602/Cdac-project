import { deleteUser } from "../../Service/AdminService";

const UserDetails = ({ user, setUserDeatils }) => {
  const { fname, lname, email, dob, uid, gender, role, status } = user;
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
              console.log(user);
              setUserDeatils({
                fname,
                lname,
                email,
                dob,
                uid,
                gender,
                role,
                status,
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
              deleteUser(uid);
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
