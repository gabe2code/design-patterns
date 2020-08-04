import INpc from './interfaces/Inpc.ts';
import IDisplay from './interfaces/IDisplay.ts';
import IAttackType from './interfaces/IAttackType.ts';

export default class Npc implements INpc {
  private display: IDisplay;
  private attack: IAttackType;
  constructor(display: IDisplay, attack: IAttackType) {
    this.display = display;
    this.attack = attack;
  }
  Display(): IDisplay {
    return this.display;
  }
  Attack(): IAttackType {
    return this.attack;
  }
}
