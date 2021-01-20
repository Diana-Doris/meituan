import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: "上海"
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
