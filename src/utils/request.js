import axios from "axios";

// 创建 Axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    "Content-Type": "application/json"
  }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在请求之前做些什么，比如添加 token
    const token = localStorage.getItem("token"); // 假设 token 存在于 localStorage 中
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data; // 直接返回数据
  },
  error => {
    // 对响应错误做些什么
    console.error("API Error:", error);
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export function $http(options) {
  return new Promise((resolve, reject) => {
    axiosInstance(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // 错误处理
        reject(err);
      });
  });
}

export const $get = function (url, params) {
  return $http({
    method: "get",
    url,
    params
  });
};
export const $post = function (url, data) {
  return $http({
    method: "post",
    url,
    data
  });
};
export default axiosInstance;
