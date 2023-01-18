import Vue from "vue";
import App from "./App.vue";
import { routes } from "../src/router";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueResourse from "vue-resource";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResourse);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
