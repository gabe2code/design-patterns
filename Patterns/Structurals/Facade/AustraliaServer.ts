import Server from './Server.ts';
import Location from './Location.ts';
export default class AustraliaServer extends Server {
  constructor() {
    super(new Location(-33.86785, 151.20732), 'Australia');
  }
}
