import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

export const G_event = new Vue();

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,

  data: ()=> ({
    changeCurrencyRoot: 'BDT',
  }),

  // watch: {
  //   changeCurrencyRoot(value) {
  //     console.log(value);
  //   }
  // },
  
  render: h => h(App)
}).$mount("#app");
