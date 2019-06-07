import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Bootstrapvue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(Bootstrapvue);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
