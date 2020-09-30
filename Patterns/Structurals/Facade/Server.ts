import Location from './Location.ts';
export default class Server {
  private location: Location;
  private name: string;

  constructor(_location: Location, _name: string) {
    this.location = _location;
    this.name = _name;
  }
  /**
   * the idea is calculate the latency that will have the client with the current server
   * This uses the ‘haversine’ formula
   * @param location 
   * @returns latency
   */
  calcLatency(clientLocation: Location): number {
    const R = 3963.0; // miles
    const φ1 = this.location.getLatitude * Math.PI / 180; // φ, λ in radians
    const φ2 = clientLocation.getLatitude * Math.PI / 180;
    const Δφ = (clientLocation.getLatitude - this.location.getLatitude) * Math.PI / 180;
    const Δλ = (clientLocation.getLongitude - this.location.getLongitude) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in miles
    return d / 186.282; // milliseconds which is the speed of light in the network
  }

  public get getName(): string {
    return this.name;
  }
}
