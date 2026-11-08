import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:81",
  timeout: 10000,
});

export default api;
