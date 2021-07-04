import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import store from "./store.js";

Vue.config.productionTip = false;
Vue.use(Vuetify);

export default new Vuetify({});

new Vue({
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
