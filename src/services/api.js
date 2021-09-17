import axios from "axios";

const api = axios.create({
  baseURL: "https://bigboss-api.herokuapp.com",
});

export default api;
