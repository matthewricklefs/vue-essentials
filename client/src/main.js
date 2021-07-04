import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import store from "./store.js";
import vueRouter from "vue-router";
import VueRouter from "vue-router";
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(vueRouter);

const routes = [
  { path: "/", component: Messages },
  { path: "/NewMessage", component: NewMessage },
];

const router = new VueRouter({ routes });

export default new Vuetify({});

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
