import axios from "axios";

let instance = axios.create({
  baseURL: "https://open.duyiedu.com",
  params: {
    appkey: "Diana_1602512479606"
  }
});

instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      console.log(response);
      if (
        response.config.url === "/api/meituan/login" ||
        response.config.url === "/api/meituan/register"
      ) {
        console.log(response.data);
        return response.data;
      }
      if (!response.data.data) {
        return response.data;
      }
      return response.data.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default instance;
