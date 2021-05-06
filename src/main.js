import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from './store'
import { routes } from './router/route'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')