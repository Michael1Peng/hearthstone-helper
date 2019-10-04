import Entity from "@/types/entity";

const TEAMMATE: string = 'teammate';
const ENEMY: string = 'enemy';

export default class Flow {
  teammates: Entity[];
  enemies: Entity[];

  constructor() {
    this.teammates = [];
    this.enemies = [];
    for (let i = 0; i < 7; i++) {
      let teammate = new Entity(i, TEAMMATE),
          enemy = new Entity(i, ENEMY);
      this.teammates.push(teammate);
      this.enemies.push(enemy);
    }
  }

  // getEntity(team: string, id: number): Entity {
  //   if (team === TEAMMATE) {
  //     return this.teammates[id]
  //   } else {
  //     return this.enemies[id]
  //   }
  // }
}
