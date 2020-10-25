import axios from "axios";

class Config {
  constructor() {
    this.$axios = axios.create({
      withCredentials: true
    });
    // Add a request interceptor
    this.$axios.interceptors.request.use(
      config => this.handlerRequestSuccess(config),
      error => this.handlerRequestException(error)
    );

    // Add a response interceptor
    this.$axios.interceptors.response.use(
      config => this.handlerResponseSuccess(config),
      error => this.handlerResponseException(error)
    );
  }
  handlerRequestSuccess(config) {
    return config;
  }
  handlerResponseSuccess(config) {
    return config;
  }
  handlerRequestException(config) {
    return config;
  }
  handlerResponseException(error) {
    const res = error.response;
    console.log("handlerResponseException", res);
    if (res.status === 401) {
      console.log("token error");
    } else if (res.status === 404) {
      console.log("not found page 404!!!");
    }
    return Promise.reject(error);
  }
}

export default Config;
