import IObserver from './IObserver.ts';
import IObservable from './IObservable.ts';
import Store from './Store.ts';

export default class Player implements IObserver {
  private store;
  name: string;
  //this could break the inversion control principle but we will inject directly the implementation instead of the abstraction for simplicity
  constructor(store: Store, name: string) {
    this.store = store;
    this.name = name;
  }
  update() {
    // this.store.;
    this.displayStatus();
  }
  displayStatus() {
    console.log(
      `product name:${this.store.latestProduct.getName}, product price: ${this.store.latestProduct.getPrice}`
    );
  }
}
