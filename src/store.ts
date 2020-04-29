import Vue from 'vue'
import Vuex from 'vuex'
import Entity from "@/types/entity";
import Flow from "@/types/Flow";
import {Focus} from "@/types/Focus";

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
    nextFocus: {id: 0, position: ATTACK} as Focus
  },
  mutations: {
    init(state) {
      for (let i = 0; i < 7; i++) {
        state.flows.push(new Flow())
      }
      state.currentFlow = state.flows[0];
    },
    // 选择
    // Decide which place to be focus directly
    changeFocus(state, nF: Focus) {
      state.nextFocus.id = nF.id;
      state.nextFocus.position = nF.position;
      state.nextFocus.team = nF.team;
    },
    selectTeammate(state, entity: Entity) {
      state.teammateSelection = entity;
    },
    selectEnemy(state, entity: Entity) {
      state.enemySelection = entity;
    },
    // 结算
    battle(state) {
      if (state.teammateSelection !== null && state.enemySelection !== null) {
        state.teammateSelection.life -= state.enemySelection.attack;
        state.teammateSelection.life = state.teammateSelection.life < 0 ? 0 : state.teammateSelection.life;
        state.enemySelection.life -= state.teammateSelection.attack;
        state.enemySelection.life = state.enemySelection.life < 0 ? 0 : state.enemySelection.life;
        state.teammateSelection = null;
        state.enemySelection = null;
      }
    },
    saveFlow(state, id: number) {
      if (state.currentFlow !== null) {
        state.flows[id] = JSON.parse(JSON.stringify(state.currentFlow))
      }
    },
    changeFlow(state, id: number) {
      state.currentFlow = state.flows[id]
    }
  },
  actions: {
    init: function (context) {
      context.commit('init')
    },
    // Calculate the next place to be focused
    changeFocus: (injectee, payload: Focus) => {
      if (payload.position === ATTACK) {
        injectee.commit('changeFocus', {id: payload.id, position: DEFENSE, team: payload.team})
      } else {
        injectee.commit('changeFocus', {id: (payload.id + 1) % 7, position: ATTACK, team: payload.team})
      }
    },
    // If both teammate and enemy have been selected, commit the battle
    commitSelection: (injectee, payload: Entity) => {
      if (payload.team === TEAMMATE) {
        injectee.commit('selectTeammate', payload);
        if (injectee.state.enemySelection !== null) {
          injectee.commit('battle')
        }
      } else {
        injectee.commit('selectEnemy', payload);
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
