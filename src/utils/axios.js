import axios from "axios";
import adapter from "axios-miniprogram-adapter";

console.log(process.env.NODE_ENV);
console.log(process.env)
const service = axios.create({
  baseURL: process.env.VUE_APP_BaseUrl,
  adapter
});

// 请求拦截器
service.interceptors.request.use(
  function(config) {
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

// 响应拦截器
service.interceptors.response.use(
  function(res) {
    return res.data;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default service;
