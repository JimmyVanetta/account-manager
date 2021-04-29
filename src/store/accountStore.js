import Vue from 'vue'
import Vuex from 'vuex'
import { guid } from '../utils/utils.js'
import api from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accounts: [],
        newAccount: ''
    },
    getters: {
        getNewAccount: state => state.newAccount,
        getCurrentAccounts: state => state.accounts.filter(account => !account.isObsolete),
        //
        getAccountById: state => id => {
            return state.accounts.find(account => account.id === id)
        },
        //
        getVerifiedAccounts: state => state.accounts.filter(account => account.verified),
        getObsoleteAccounts: state => state.accounts.filter(account => account.isObsolete)
    },
    actions: {
        getAllAccounts ({commit}) {
            api.getAllAccounts(accounts => {
                commit('SET_ACCOUNTS', accounts)
            })
        },
        getAccount({commit}, account) {
            commit('GET_ACCOUNT', account)
        },
        addAccount({commit}, account) {
            commit('ADD_ACCOUNT', account)
        },
        editAccount({commit}, account) {
            commit('EDIT_ACCOUNT', account)
        },
        removeAccount({commit}, account) {
            commit('REMOVE_ACCOUNT', account)
        },
        verifyAccount({commit}, account) {
            commit('VERIFY_ACCOUNT', account)
         },
    },
    mutations: {
        SET_ACCOUNTS (state, accounts) {
            state.accounts = accounts
        },
        GET_ACCOUNT(state, account) {
            state.newAccount = account;
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
        REMOVE_ACCOUNT(state, account) {
            var accounts = state.accounts
            account.isObsolete = !account.isObsolete
            accounts.splice(accounts.indexOf(account), 0)
            state.accounts = accounts
        },
         VERIFY_ACCOUNT(state, account) {
            var accounts = state.accounts 
            account.verified = !account.verified
            accounts.splice(accounts.indexOf(account), 0)
            state.accounts = accounts
         },
    }
})