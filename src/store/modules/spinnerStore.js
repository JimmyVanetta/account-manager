const state = () => ({
    isVisible: false,
})
const getters = {
}
const actions = {
    showModal({ commit }, isVisible) {
        commit('SHOW_MODAL', isVisible)
    }
        // PEE PEE POO POO
    // HIDE MODAL
        // PEE PEE POO POO
}
const mutations = {
    SHOW_MODAL(state, isVisible) {
        isVisible = !isVisible
        state.isVisible = isVisible
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}