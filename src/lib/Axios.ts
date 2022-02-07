import axios, { AxiosInstance } from "axios";

const Axios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 기본 서버 주소 입력
  headers: {
    "Access-Control-Allow-Origin": "https://api.petever.pet",
  },
  withCredentials: true,
});

export default Axios;
