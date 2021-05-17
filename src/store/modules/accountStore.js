import { guid } from '../../utils/utils.js'
import api from '../../api/api.js'

const state = () => ({
    accounts: []
})
const getters = {
    getAccountById: state => id => state.accounts.find(account => account.id === id),
    getCurrentAccounts: state => state.accounts.filter(account => !account.isObsolete),
    getVerifiedAccounts: state => state.accounts.filter(account => account.verified),
    getObsoleteAccounts: state => state.accounts.filter(account => account.isObsolete)
}
const actions = {
    getAccounts ({commit}) {
        api.getAllAccounts(accounts => {
            commit('SET_ACCOUNTS', accounts)
        })
    },
    addAccount({commit}, account) {
        commit('ADD_ACCOUNT', account)
    },
    editAccount({commit}, account) {
        commit('EDIT_ACCOUNT', account)
    },
    removeAccount({commit}, accountId) {
        commit('REMOVE_ACCOUNT', accountId)
    },
    verifyAccount({commit}, account) {
        commit('VERIFY_ACCOUNT', account)
     },
}
const mutations = {
    SET_ACCOUNTS (state, accounts) {
        state.accounts = accounts
    },
    ADD_ACCOUNT(state, account) {
        let id = guid()
        account = Object.assign({ id : id }, account)
        state.accounts.push(account)
    },
    EDIT_ACCOUNT(state, account) {
        var accounts = state.accounts
        accounts.splice(accounts.indexOf(account),0)
        state.accounts = accounts
    },
    REMOVE_ACCOUNT(state, accountId) {
        var id = accountId
        var accounts = state.accounts // get array of accounts from state
        var account = accounts.find(account => account.id === id) // get account from array
        account.isObsolete = !account.isObsolete // mark obsolete
        accounts.splice(accounts.indexOf(account), 0) // merge account back in to array
        state.accounts = accounts // merge updated array back in to state
    },
     VERIFY_ACCOUNT(state, accountId) {
        var id = accountId
        var accounts = state.accounts // get array of accounts from state
        var account = accounts.find(account => account.id === id) // get account from array
        account.verified = !account.verified // mark verified
        accounts.splice(accounts.indexOf(account), 0) // merge account back in to array
        state.accounts = accounts // merge updated array back in to state
     },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}