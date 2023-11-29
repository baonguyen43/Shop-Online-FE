import axios from "axios";

// import { REFRESH_TOKEN, TOKEN } from "../constants";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("TOKEN");

//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }

//   return config;
// }, (error) => {
//   Promise.reject(error);
// });

// axiosClient.interceptors.response.use( async (response) => {
//   const { token, refreshToken } = response.data;

//   if (token) {
//    localStorage.setItem("TOKEN", token);
//   }

//   if (refreshToken) {
//   localStorage.setItem("REFRESH_TOKEN", refreshToken);
//   }

//   return response.data;
// }, async (error) => {
//   if (error?.response?.status !== 401) {
//     Promise.reject(error);
//   }

//   const originalConfig = error.config;

//   if (error?.response?.status === 401 && !originalConfig.sent) {
//     originalConfig.sent = true;

//     try {
//       const token = localStorage.getItem("TOKEN");
//       const refreshToken = localStorage.getItem("REFRESH_TOKEN");

//       if (!token) {
//       location.href = '/login';

//         return Promise.reject(error);
//       }

//       if (refreshToken) {
//         const res = await axiosClient.post('auth/refresh-token', {
//           refreshToken,
//         });

//         const { token } = res.data;
//         localStorage.setItem("TOKEN", token);

//         originalConfig.headers = {
//           ...originalConfig.headers,
//           Authorization: `Bearer ${token}`,
//         }

//         return axiosClient(originalConfig);
//       } else {
//         return Promise.reject(error);
//       }
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   }
// });

export default axiosClient;
