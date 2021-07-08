// INITIAL STATE
const state = () => ({
    isVisible: false,
})
const getters = {
}
// ACTIONS
const actions = {
    showModal({ commit }) {
        commit('SHOW_SPINNER')
    },
    hideModal({ commit }) {
        commit('HIDE_SPINNER')
    }
}
// ACTIONS
const mutations = {
    SHOW_SPINNER(state) {
        state.isVisible = true
    },
    HIDE_SPINNER(state) {
        state.isVisible = false
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}