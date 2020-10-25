import Config from "@/common/axios/config";
import queryString from "query-string";

class Base extends Config {
  get(path, params = {}) {
    return this.$axios.get(path, { params });
  }

  patch(path, payload) {
    return this.$axios.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path, payload) {
    return this.$axios.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  queryPost(path, payload) {
    payload = `${queryString.stringify(payload)}`;
    return this.$axios.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  multiPost(path, payload) {
    return this.$axios.request({
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
      url: path,
      responseType: "json",
      data: payload
    });
  }
  delete(path, params = {}) {
    return this.$axios.delete(path, { params });
  }
}

export default Base;
