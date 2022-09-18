import Logout from "../components/Logout/Logout";
import jwt from "jwt-decode";

const getCurrentAuthUser = (setUser) => {
  try {
    const token = localStorage.getItem("token");
    const user = jwt(token);
    setUser(user);
  } catch (error) {
    <Logout />;
  }
};

const isLoginStatus = (SetIsLogin) => {
  if (localStorage.getItem("token")) {
    SetIsLogin(true);
  } else {
    SetIsLogin(false);
  }
};

export { getCurrentAuthUser, isLoginStatus };
