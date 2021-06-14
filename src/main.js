import { jwtInterceptor } from "./services";
import { createApp } from "vue";

import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CKEditor from "@ckeditor/ckeditor5-vue";

import router from "./router"; // <---
import store from "./store";

jwtInterceptor();

createApp(App)
  .use(router)
  .use(CKEditor)
  .use(store)
  .mount("#app");
