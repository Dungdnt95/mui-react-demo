import axios from "axios";

let API_URL = "http://localhost:8080/api";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["contentType"] = "application/json";
axios.defaults.headers.common["Cache-Control"] = "no-cache";
axios.defaults.headers.common["Cache-control"] = "no-store";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Pragma"] = "no-cache";
axios.defaults.headers.common["Expires"] = 0;
axios.defaults.headers.common["Timezone"] = new Date().getTimezoneOffset();
axios.defaults.headers.common["X-Request-With"] = "XMLHttpRequest";
axios.interceptors.request.use(
  async function (config) {
    let token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default {
  request(method, url, params, data, headers = {}, config = {}) {
    return axios.request({
      ...config,
      url,
      params,
      data,
      method: method.toLowerCase(),
      headers,
    });
  },

  get(url, params = null, config = {}) {
    return this.request("get", url, params, {}, {}, config);
  },

  post(url, data, headers = {}, config = {}) {
    return this.request("post", url, {}, data, headers, config);
  },

  put(url, data, config = {}) {
    return this.request("put", url, {}, data, {}, config);
  },

  delete(url, data = {}, config = {}) {
    return this.request("delete", url, {}, data, {}, config);
  },

  export(url, data, headers = {}, config = {}) {
    config.responseType = "blob";
    return this.request("post", url, {}, data, headers, config);
  },

  import(url, data, headers = {}, config = {}) {
    this.setHeader("Content-Type", "multipart/form-data");
    return this.request("post", url, {}, data, headers, config);
  },

  setHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  },
};

