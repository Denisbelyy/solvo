import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/index'

Vue.prototype.api = store.api = axios.create();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
