import * as http from './httpService';

const ProfileServices = () => {

    http.patch("/profile", editedUser).then((response)=>{
       if (response.data.status === "success") {
            return response.data.token;
       }
    }).catch((err)=>{
        console.log("Error occurred",err);
    });

    // function patch(url, data, state) {
    //   return axios
    //     .patch(url, data, {
    //       headers: {
    //         authorization: state.accessToken,
    //       },
    //     })
    //     .then((result) => result.data)
    //     .catch(async (err) => {
    //       if (err && err.response && err.response.status === 401) {
    //         await getAccessToken(state);
    //         return patch(url, data, state);
    //       }
    //       return Promise.reject(err);
    //     });
    // }
}
 
export default ProfileServices;