import IDisplay from './interfaces/IDisplay.ts';

export default class Skeleton implements IDisplay {
  private shape: string;
  constructor() {
    this.shape = 'skeleton';
  }
  defaultDisplay(): string {
    return this.shape;
  }
  specialDisplay(): string {
    return `Giant ${this.shape}`;
  }
}
