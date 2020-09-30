import Server from './Server.ts';
import Location from './Location.ts';
export default class AmericaServer extends Server {
  constructor() {
    super(new Location(40.68, -102.17), 'America');
  }
}
