import axios from "axios";

let instance = axios.create({
  baseURL: "https://open.duyiedu.com",
  params: {
    appkey: "Diana_1602512479606"
  }
});

instance.interceptors.response.use(
  response => {
    // console.log(response);
    if (response.status === 200) {
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
