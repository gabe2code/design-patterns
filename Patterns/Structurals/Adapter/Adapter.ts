import Adaptee from './Adaptee';
import ITarget from './ITarget';

export default class Adapter implements ITarget {
  private adaptee: Adaptee;
  constructor(adapteeImp: Adaptee) {
    this.adaptee = adapteeImp;
  }
  connect(nickName: string): void {
    this.adaptee.multiplayerConnect(nickName);
  }
}
