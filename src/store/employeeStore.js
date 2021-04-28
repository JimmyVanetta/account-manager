import Vue from 'vue'
import Vuex from 'vuex'
import { guid } from '../utils/utils.js'
//import api from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.store({
    state: {
        employees: [],
        newEmployee: ''
    },
    getters: {

    },
    actions: {
        getEmployee({commit}, employee) {
            commit('GET_EMPLOYEE', employee)
        },
        addEmployee({commit}, employee) {
            commit('ADD_EMPLOYEE', employee)
        },
        editEmployee({commit}, employee) {
            commit('EDIT_EMPLOYEE', employee)
        },
        removeEmployee({commit}, employee) {
            commit('REMOVE_EMPLOYEE', employee)
        },
    },
    mutations: {
        GET_EMPLOYEES(state, employee) {
            state.newEmployee = employee
        },
        ADD_EMPLOYEE(state, employee) {
            let id = guid()
            employee = Object.assign({ id : id }, employee)
            state.employees.push(employee)
        },
        EDIT_EMPLOYEE(state, employee) {
            var employees = state.employees
            accounts.splice(employees.indexOf(employee), 0)
            state.employees = employees
        },
        REMOVE_EMPLOYEE(state, employee) {
            var employees = state.employees
            employee.isObsolete = true
            employees.splice(employees.indexOf(employee), 0)
            state.employees = employees
        },
    }
})