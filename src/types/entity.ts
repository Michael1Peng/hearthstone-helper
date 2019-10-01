export default class Entity {
  id: number;
  attack: number;
  life: number;
  team: string;

  constructor(id: number, team: string) {
    this.id = id;
    this.attack = 0;
    this.life = 0;
    this.team = team;
  }
}
