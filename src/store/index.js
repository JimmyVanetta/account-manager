import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accountStore'
import employees from './modules/employeeStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        accounts,
        employees
    }
})