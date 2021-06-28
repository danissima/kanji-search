const state = () => ({
  users: [
    {
      login: "CrazyBoy123",
      name: "Mark",
      email: "markus@gmail.com",
      password: "catsCats12"
    },
    {
      login: "Admin",
      name: "Daniel",
      email: "daniel@gmail.com",
      password: "YesButNo"
    },
    {
      login: "SuperCoolReactUser123",
      name: "Jessica",
      email: "jessica@gmail.com",
      password: "ILoveReact4"
    }
  ],
  loggedAs: null
})

const mutations = {
  addNewUser(state, user) {
    state.users.push(user)
  },
  logUserIn(state, user) {
    state.loggedAs = user.login
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}