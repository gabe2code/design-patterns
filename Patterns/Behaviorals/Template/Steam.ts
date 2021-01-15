export default abstract class Steam {
  // protected version: number;
  constructor(protected version: number) {
    // this.version = _version;
  }
  createGame() {
    if (this.checkCompatibility()) {
      this.loadMap();
    } else {
      this.throwsError();
    }
  }
  abstract checkCompatibility(): boolean;
  abstract throwsError(): void;
  abstract loadMap(): void;
}
