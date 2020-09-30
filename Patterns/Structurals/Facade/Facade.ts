import Location from './Location.ts';
import Server from './Server.ts';
import AmericaServer from './AmericaServer.ts';
import AsiaServer from './AsianServer.ts';
import EuropeServer from './EuropeServer.ts';
import AustraliaServer from './AustraliaServer.ts';

export default class Facade {
  connect(_location: Location): Server {
    const amServer = new AmericaServer();
    const asServer = new AsiaServer();
    const euServer = new EuropeServer();
    const auServer = new AustraliaServer();
    const lessLatency = [ amServer, asServer, euServer, auServer ].reduce(
      (ac, cu) => (ac.calcLatency(_location) < cu.calcLatency(_location) ? ac : cu)
    );
    return lessLatency;
  }
}
