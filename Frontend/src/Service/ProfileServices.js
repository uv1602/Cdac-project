import * as http from "./httpService";

const ProfileServices = (editedUser, setToken) => {
  http
    .patch("/profile", editedUser)
    .then((data) => {
      console.log(data);
      setToken(data.data.token);
      return data;
    })
    .catch((error) => {});
};

export default ProfileServices;
