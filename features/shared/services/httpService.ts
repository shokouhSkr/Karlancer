import axios from "axios";
import { BASE_URL } from "@/utils/constants";

// custom axios
const customAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Now each cookie that presents in the user browser, sends to the backend, and the rest is handled in the backend (cookie type: http-only)
});

customAxios.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// Create new access token based on refresh token
customAxios.interceptors.response.use(
  (res) => res,

  async (err) => {
    console.log("err.config: ", err.config);
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return customAxios(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

const http = {
  get: customAxios.get,
  post: customAxios.post,
  delete: customAxios.delete,
  put: customAxios.put,
  patch: customAxios.patch,
};

export default http;
