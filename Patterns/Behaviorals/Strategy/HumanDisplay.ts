import IDisplay from './interfaces/IDisplay.ts';

export default class HumanDisplay implements IDisplay {
  private shape: string;
  constructor() {
    this.shape = 'Humanoid';
  }
  defaultDisplay(): string {
    return this.shape;
  }
  specialDisplay(): string {
    return ` Super ${this.shape}`;
  }
}
