//STYLES
// import styles from "./MyProfile.module.scss";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { useState } from "react";

const Label = ({ title, value}) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = e.target;
    console.log(profile.value);
  };
  return (
    <tr>
      <td>
        {title}
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
};

export default Label;


