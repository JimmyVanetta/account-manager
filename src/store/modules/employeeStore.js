import { eGuid } from '../../utils/utils.js'
import api from '../../api/api.js'

const state = () => ({
    employees: []
})

const getters = {
    getCurrentEmployees: state => id => {
        return state.employees.find(employee => employee.accountId === id)
    },
    getEmployeeById: state => id => {
        return state.employees.find(employee => employee.id === id)
    },
}

const actions = {
    getEmployees ({commit}) {
        api.getAllEmployees(employees => {
            commit('SET_EMPLOYEES', employees)
        })
    },
    addEmployee({commit}, employee) {
        commit('ADD_EMPLOYEE', employee)
    },
    editEmployee({commit}, employee) {
        commit('EDIT_EMPLOYEE', employee)
    },
    removeEmployee({commit}, employee) {
        commit('REMOVE_EMPLOYEE', employee)
    }
}

const mutations = {
    SET_EMPLOYEES(state, employees) {
        state.employees = employees
    },
    ADD_EMPLOYEE(state, employee) {
        let id = eGuid()
        employee = Object.assign({ id : id }, employee)
        state.employees.push(employee)
    },
    EDIT_EMPLOYEE(state, employee) {
        var employees = state.employees
        employees.splice(employees.indexOf(employee), 0)
        state.employees = employees
    },
    REMOVE_EMPLOYEE(state, employee) {
        var employees = state.employees
        employee.isObsolete = true
        employees.splice(employees.indexOf(employee), 0)
        state.employees = employees
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}