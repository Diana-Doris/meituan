import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: {}
  },
  mutations: {
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
