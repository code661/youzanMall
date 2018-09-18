import "modules/css/common.css";
import Vue from "vue";
import router from "./router/index.js"
import store from "./store/index.js"

new Vue({
  router,
  store
}).$mount("#app");