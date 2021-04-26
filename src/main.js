import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AccountStore from './store/accountStore'
import { routes } from './route'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store: AccountStore,
  el: '#app',
  router,
  AccountStore,
  components: { App },
  render: h => h(App),
}).$mount('#app')