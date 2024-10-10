import axios from "axios";
import Cookies from "js-cookie";
import { SEVER_URL } from "@/constants/baseUrl";

const axiosInstance = axios.create({
  baseURL: SEVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//토큰 유효성 검사
axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    if (error.response.status === 401) {
      const isAccessToken = Cookies.get("accessToken") !== undefined;
      

      if (!isAccessToken) {
        return Promise.reject(error);
      }

      //refresh
      //   const res = await axios.post(`${SEVER_URL}/refresh`, {
      //     accessToekn: Cookies.get("accessToken"),
      //     refreshToken: Cookies.get("refreshToken"),
      //   });
      //   if (res.data === false) {
      //     return false;
      //   }
      //   Cookies.set("accessToken", res.data.accessToken);
      //   Cookies.set("refreshToken", res.data.refreshToken);

      //   return Promise.reject(error);
    }
  },
);

axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get("accessToekn");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
