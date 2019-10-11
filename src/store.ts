import Vue from 'vue'
import Vuex from 'vuex'
import Entity from "@/types/entity";
import Flow from "@/types/Flow";

Vue.use(Vuex);

const TEAMMATE: string = 'teammate';
const ENEMY: string = 'enemy';
const ATTACK: string = 'attack';
const DEFENSE: string = 'defense';

export default new Vuex.Store({
  state: {
    teammateSelection: null as Entity | null,
    enemySelection: null as Entity | null,
    currentFlow: null as null | Flow,
    flows: [] as Flow[],
    // 通过订阅这个对象，watch 监控这个对象，来判断focus 转移到哪里
    nextFocus: {id: 0, position: ATTACK} as { id: number, position: string, team: string }
  },
  mutations: {
    init(state) {
      for (let i = 0; i < 7; i++) {
        state.flows.push(new Flow())
      }
      state.currentFlow = {...state.flows[0]};
    },
    changeFocus(state, nF: { id: number, position: string, team: string }) {
      state.nextFocus.id = nF.id;
      state.nextFocus.position = nF.position;
      state.nextFocus.team = nF.team;
    },
    setTeammate(state, entity: Entity) {
      state.teammateSelection = entity;
    },
    setEnemy(state, entity: Entity) {
      state.enemySelection = entity;
    },
    battle(state) {
      if (state.teammateSelection !== null && state.enemySelection !== null) {
        state.teammateSelection.life -= state.enemySelection.attack;
        state.teammateSelection.life = state.teammateSelection.life < 0 ? 0 : state.teammateSelection.life;
        state.enemySelection.life -= state.teammateSelection.attack;
        state.enemySelection.life = state.enemySelection.life < 0 ? 0 : state.enemySelection.life;
        state.teammateSelection = null;
        state.enemySelection = null;
      }
    }

  },
  actions: {
    init: function (context) {
      context.commit('init')
    },
    changeFocus: (injectee, payload: { id: number, position: string, team: string }) => {
      if (payload.position === ATTACK) {
        injectee.commit('changeFocus', {id: payload.id, position: DEFENSE, team: payload.team})
      } else {
        injectee.commit('changeFocus', {id: (payload.id + 1) % 7, position: ATTACK, team: payload.team})
      }
    },
    commitSelection: (injectee, payload: Entity) => {
      if (payload.team === TEAMMATE) {
        injectee.commit('setTeammate', payload);
        if (injectee.state.enemySelection !== null) {
          injectee.commit('battle')
        }
      } else {
        injectee.commit('setEnemy', payload);
        if (injectee.state.teammateSelection !== null) {
          injectee.commit('battle')
        }
      }
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
