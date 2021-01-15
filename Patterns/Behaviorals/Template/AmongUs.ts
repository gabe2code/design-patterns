import Steam from './Steam.ts';

export default class AmongUS extends Steam {
  constructor(_version: number) {
    super(_version);
  }
  checkCompatibility(): boolean {
    return !!(this.version > 1.0);
  }
  throwsError(): void {
    console.error('The version of the game is incompatible, please upgrade to the latest');
  }
  loadMap(): void {
    console.log('loading among us map');
  }
}
