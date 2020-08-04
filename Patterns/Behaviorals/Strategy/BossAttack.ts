import IAttackType from './interfaces/IAttackType.ts';

export default class BossAttack implements IAttackType {
  private attack: number;
  private criticalAttack: number;
  constructor() {
    this.attack = 30;
    this.criticalAttack = 30;
  }
  defaultAttack(): number {
    return this.attack;
  }
  superPower() {
    return this.attack + this.criticalAttack;
  }
}
