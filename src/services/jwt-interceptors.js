import axios from "axios";
import store from "../store";

export function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    const isLoggedIn = store.state.token;
    if (isLoggedIn) {
      request.data.authorization = `${store.state.token}`;
    }

    return request;
  });
}
