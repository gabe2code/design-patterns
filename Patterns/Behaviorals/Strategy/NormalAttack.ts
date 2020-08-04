import IAttackType from './interfaces/IAttackType.ts';

export default class NormalAttack implements IAttackType {
  private attack: number;
  constructor() {
    //fixed value for testing purposes
    this.attack = 10;
  }
  defaultAttack(): number {
    return this.attack;
  }
  superPower(): number {
    return this.attack + 0;
  }
}
