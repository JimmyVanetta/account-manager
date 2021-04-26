import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        accounts: [],
        newAccount: ''
    },
    getters: {
        getNewAccount: state => state.newAccount,
        getAccounts: state => state.accounts.filter(account => !account.isObsolete),// not obsolete
        getAccountById: (state, accountId) => state.accounts.filter(account => account.id === accountId),
        getObsoleteAccounts: state => state.accounts.filter(account => account.isObsolete),// obsolete
        getVerifiedAccounts: state => state.accounts.filter(account => account.verified)// verified
    },
    actions: {
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
        clearAccount({commit}) {
            commit('CLEAR_ACCOUNT')
        }
    },
    mutations: {
        GET_ACCOUNT(state, account) {
            state.newAccount = account;
        },
        ADD_ACCOUNT(state, account) {
            //state.accounts = [...accounts, account]
            let id = guid();
            account = Object.assign({ id : id }, account)
            state.accounts.push(account)
        },
        EDIT_ACCOUNT(state, account) {
            // var accounts = state.accounts
            // accounts.splice(accounts.indexOf(account), 1)
            // state.accounts = accounts
            // state.newAccount = account.body
            state.accounts[account.id] = account;
        },
        REMOVE_ACCOUNT(state, account) {
            var accounts = state.accounts
            accounts.splice(accounts.indexOf(account), 1)
        },
         VERIFY_ACCOUNT(state, account) {
            account.verified = !account.verified
         },
        CLEAR_ACCOUNT(state) {
            state.newAccount = ''
        }
    }
})
// generate unique ID
const guid = function () {
    function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    }
    return s4() + s4()
};