import Adaptee from './Adaptee.ts';
import ITarget from './ITarget.ts';

export default class Adapter implements ITarget {
  private adaptee: Adaptee;
  constructor(adapteeImp: Adaptee) {
    this.adaptee = adapteeImp;
  }
  connect(nickName: string): void {
    this.adaptee.multiplayerConnect(nickName);
  }
}
