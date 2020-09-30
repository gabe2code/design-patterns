import Server from './Server.ts';
import Location from './Location.ts';
export default class EuropaServer extends Server {
  constructor() {
    super(new Location(52.516667, 13.383333), 'Europa');
  }
}
