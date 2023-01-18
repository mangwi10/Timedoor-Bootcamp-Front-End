import Vue from "vue";
import App from "./App.vue";
import VueResourse from "vue-resource";
import { routes } from "./routes";
import VueRouter from "vue-router";

export const eventBus = new Vue();
Vue.use(VueResourse);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
