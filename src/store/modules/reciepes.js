const state = () => ({
  storedReciepes: [
    
  ],
})

const mutations = {
  addReciepe(state, reciepe) {
    state.storedReciepes.push(reciepe)
  },
  removeReciepe(state, reciepe) {
    state.storedReciepes.splice(state.storedReciepes.indexOf(reciepe), 1)
  }
}

const getters = {
  getSavedReciepes(state) {
    return state.storedReciepes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}