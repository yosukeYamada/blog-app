import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import firebase from 'firebase'
// import vuex from './plugins/vuex.js'
import initialState from './store/state.js'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
Vue.prototype.$axios = axios;


  // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB57NKfxDawoDlpzDFYYTgQPxgNEe04rMU",
  authDomain: "my-blog-b4f39.firebaseapp.com",
  databaseURL: "https://my-blog-b4f39.firebaseio.com",
  projectId: "my-blog-b4f39",
  storageBucket: "my-blog-b4f39.appspot.com",
  messagingSenderId: "3630910110",
  appId: "1:3630910110:web:e48683e59be97eb969498f",
  measurementId: "G-VM2RT4SJKS"
}
// console.log(localStorage.length)
// console.log(localStorage)
// localStorage.removeItem('vuex')
// console.log(localStorage)
// console.log(localStorage.length)
// console.log("bbbbbb")
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




new Vue({
  router,
  store,
  // vuex,
  vuetify,
  render: h => h(App),
  created(){
    localStorage.setItem('initialState', JSON.stringify(initialState));
  }
}).$mount('#app')
