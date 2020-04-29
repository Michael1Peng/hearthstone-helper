import store from '@/store'
import hotkeys from "hotkeys-js";
import Entity from "@/types/entity";

const TEAMMATE: string = 'teammate';
const ENEMY: string = 'enemy';

export const EnemiesKeys: Array<string> = ['q', 'w', 'e', 'r', 't', 'y', 'u']
export const TeammatesKeys: Array<string> = ['a', 's', 'd', 'f', 'g', 'h', 'j']

export function init() {
  EnemiesKeys.forEach((key: string, index: number) => {
    hotkeys(key, function (event, handler) {
      event.preventDefault();
      let entity: Entity = store.getters.getEntity(ENEMY, index);
      store.dispatch('commitSelection', entity)
    })
  })
  TeammatesKeys.forEach((key: string, index: number) => {
    hotkeys(key, function (event, handler) {
      event.preventDefault();
      let entity: Entity = store.getters.getEntity(TEAMMATE, index);
      store.dispatch('commitSelection', entity)
    })
  })
}
