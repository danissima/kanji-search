import Vue from 'vue'
import Vuex from 'vuex'
import reciepes from './modules/reciepes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reciepes
  },
  strict: process.env.NODE_ENV !== 'production'
})
