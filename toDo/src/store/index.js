import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: null,
  },
  mutations: {
    changeName(state, firstName) {
      state.firstName = firstName;
    },
    
  },
  actions: {
    changeName({ commit }, firstName) {
      commit('changeName', firstName);
    },
    
  },
  getters: {
    getFirstName(state) {
      return state.firstName;
    }
  },
  
})
