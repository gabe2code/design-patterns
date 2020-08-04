import IDisplay from './IDisplay.ts';
import IAttackType from './IAttackType.ts';

export default interface INpc {
  Display(): IDisplay;
  Attack(): IAttackType;
};
