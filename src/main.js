import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './mock/mock.js'

Vue.config.productionTip = false
Vue.prototype.$service = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
