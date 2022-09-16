import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers["x-token"] = localStorage.getItem("token");
const get = (url) => {
  return axios.get(url);
};

const post = (url, data) => {
  return axios.post(url, data);
};

export { get, post };
