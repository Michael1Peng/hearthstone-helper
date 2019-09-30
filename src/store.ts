import Vue from 'vue'
import Vuex from 'vuex'
import Entity from "@/types/entity";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teammateSelection: {} as Entity,
    enemySelection: {} as Entity
  },
  mutations: {},
  actions: {}
})
