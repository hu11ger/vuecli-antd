import axios from "axios";

export function request(config) {
  // 1.构造axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });

  // 2.进行响应拦截
  instance.interceptors.response.use((res) => {
    // 拦截处理响应数据后进行返回
    return res.data.data;
  }),
    (err) => {
      console.log(err);
    };
  // 3.返回promise对象
  return instance(config);
}
