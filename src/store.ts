import Vue from 'vue'
import Vuex from 'vuex'
import Entity from "@/types/entity";
import Flow from "@/types/Flow";

Vue.use(Vuex);

const TEAMMATE: string = 'teammate';
const ENEMY: string = 'enemy';

export default new Vuex.Store({
  state: {
    teammateSelection: {} as Entity,
    enemySelection: {} as Entity,
    currentFlow: null as null | Flow,
    flows: [] as Flow[]
  },
  mutations: {
    init(state) {
      for (let i = 0; i < 7; i++) {
        state.flows.push(new Flow())
      }
      state.currentFlow = {...state.flows[0]};
    }
  },
  actions: {
    init: function (context) {
      context.commit('init')
    }
  },
  getters: {
    getEntity: state => (team: string, id: number): Entity => {
      if (state.currentFlow === null) {
        return new Entity(0, TEAMMATE);
      }
      if (team === TEAMMATE) {
        return state.currentFlow.teammates[id]
      } else {
        return state.currentFlow.enemies[id]
      }
    }
  }
})
