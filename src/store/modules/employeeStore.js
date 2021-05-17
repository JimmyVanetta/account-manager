import { eGuid } from '../../utils/utils.js'
import api from '../../api/api.js'

const state = () => ({
    employees: []
})
const getters = {
    getEmployeeById: state => id => state.employees.find(employee => employee.id === id),
    getEmployeesByAccountId: state => id => state.employees.filter(employee => employee.accountId === id)
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
    removeEmployee({commit}, employeeId) {
        commit('REMOVE_EMPLOYEE', employeeId)
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
    REMOVE_EMPLOYEE(state, employeeId) {
        // var employees = state.employees
        // employees.splice(employees.indexOf(employee), 1)
        // state.employees = employees
        var id = employeeId
        var employees = state.employees // get array of employees from state
        var employee = employees.find(employee => employee.id === id) // get employee from array
        employees.splice(employees.indexOf(employee), 1) // remove employee from array - ** change to soft delete **
        state.employees = employees // merge updated array back in to state
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}