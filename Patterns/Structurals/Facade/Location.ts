export default class Location {
  private lat: number;
  private long: number;
  constructor(_lat: number, _long: number) {
    this.lat = _lat;
    this.long = _long;
  }

  public get getLatitude(): number {
    return this.lat;
  }

  public get getLongitude(): number {
    return this.long;
  }
}
