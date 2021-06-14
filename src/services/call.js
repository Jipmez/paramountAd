import axios from "axios";
import api from "../services/call";
import store from "../store";
export default {
  post(data) {
    store.state.loader = true;
    return axios
      .post("https://paramountad.com/miradon/baseApi.php", data)
      .finally(() => (store.state.loader = false));
  },

  logout() {
    localStorage.removeItem("sid");
    return true;
  },

  logoutA() {
    localStorage.removeItem("aid");
    return true;
  },

  checkuser() {
    return localStorage.getItem("sid") === null ? false : true;
  },

  async getus() {
    let mg = {
      key: "getuser",
      authorization: localStorage.getItem("sid"),
    };
    return api.post(mg);
  },
};
