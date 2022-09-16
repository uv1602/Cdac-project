import Logout from "../components/Logout/Logout";
import jwt from "jwt-decode";

const getCurrentAuthUser = () => {
  try {
    const token = localStorage.getItem("token");
    const user = jwt(token);
    console.log(user);
    return user;
  } catch (error) {
    <Logout />;
  }
};

const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

const getCurrentAuthUserName = () => {
  try {
    if (isLogin) {
      console.log(getCurrentAuthUser().fname);
      return getCurrentAuthUser().fname;
      // console.log(name);
    }
  } catch (error) {
    return "";
  }
};

export { getCurrentAuthUser, isLogin, getCurrentAuthUserName };
