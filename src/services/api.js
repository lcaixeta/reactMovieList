import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com"
});


// Estrutra para utilizar token nas requisições
// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;