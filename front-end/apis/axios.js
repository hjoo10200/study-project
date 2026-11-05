import axios from "axios"; //백엔드와 프론트엔드를 연결시켜주는 라이브러리

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

export default api;