import ITarget from './ITarget';

export default class Player {
  nickName: string;
  constructor(nick: string) {
    this.nickName = nick;
  }
  public connect(target: ITarget): void {
    target.connect(this.nickName);
  }
}
