import Server from './Server.ts';
import Location from './Location.ts';
export default class AsiaServer extends Server {
  constructor() {
    super(new Location(39.9075, 116.39723), 'Asia');
  }
}
