import Vue from 'vue'
import Vuex from 'vuex'
import Entity from "@/types/entity";
import Flow from "@/types/Flow";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teammateSelection: {} as Entity,
    enemySelection: {} as Entity,
    currentFlow: {} as Flow,
    flows: [] as Flow[]
  },
  mutations: {
    init(state) {
      for (let i = 0; i < 7; i++) {
        state.flows.push(new Flow())
      }
      state.currentFlow = {...state.currentFlow, ...state.flows[0]};
    }
  },
  actions: {
    init: function (context) {
      debugger;
      context.commit('init')
    }
  }
})
