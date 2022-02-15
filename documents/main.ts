import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TUIKit from "packages";

Vue.use(TUIKit);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");