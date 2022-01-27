import { createApp } from "vue";
import App from "./App.vue";
import TUIKit from "packages";
import Router from "./router";

createApp(App)
  .use(Router)
  .use(TUIKit)
  .mount("#app");
