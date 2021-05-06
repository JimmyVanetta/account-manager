import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from './store'

import { routes } from './router/route'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faEdit, faTrash, faEllipsisH, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAddressBook)
library.add(faEdit)
library.add(faEllipsisH)
library.add(faInfo)
library.add(faTrash)

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