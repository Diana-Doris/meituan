import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: {},
    userName: ""
  },
  mutations: {
    setUserName(state, val) {
      state.userName = val;
    },
    setPosition(state, val) {
      state.position = val;
    }
  },
  actions: {
    async getPosition({ commit }, position) {
      commit("setPosition", position);
    }
  }
});
