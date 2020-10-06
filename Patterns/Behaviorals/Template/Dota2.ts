import Steam from './Steam.ts';

export default class Dota2 extends Steam {
  constructor(_version: number) {
    super(_version);
  }
  checkCompatibility(): boolean {
    console.log('version', this.version);
    return !!(this.version > 5.01);
  }
  throwsError(): void {
    console.error('the version of the game is incompatible');
  }
  loadMap(): void {
    console.log('loading dota2 map');
  }
}
