import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
