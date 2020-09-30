import Facade from './Facade.ts';
import Location from './Location.ts';

export default class Player {
  private name: string;
  private gameName: string;
  private location: Location;
  constructor(_name: string, _gameName: string) {
    this.name = _name;
    this.gameName = _gameName;
    this.location = new Location(
      Math.round((Math.random() * 360 - 180) * 1000) / 1000,
      Math.round((Math.random() * 360 - 180) * 1000) / 1000
    );
  }
  playOnline(): void {
    const facade = new Facade();
    const server = facade.connect(this.location);
    console.log(
      `${this.name} you are connected to ${server.getName} server with ${server.calcLatency(
        this.location
      )} seconds of latency playing 
      ${this.gameName}`
    );
  }
}
