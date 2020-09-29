import IObservable from './IObservable.ts';
import Player from './Player.ts';
import Product from './Product.ts';

export default class Store implements IObservable {
  private productList: Product[];
  private subscribers: Player[];
  constructor() {
    this.productList = new Array<Product>();
    this.subscribers = new Array<Player>();
  }

  add(subs: Player) {
    this.subscribers.push(subs);
  }
  remove(subs: Player) {
    const index = this.subscribers.findIndex((fri) => fri === subs);
    this.subscribers.splice(index, 1);
  }
  /**
 * this is the main function in change of notify all of the subscriptions that a new product was added
 * @param product 
 */
  addProduct(product: Product) {
    this.productList.push(product);
    this.notify();
  }
  notify() {
    this.subscribers.map((friend) => friend.update());
  }

  public get latestProduct(): Product {
    return this.productList[this.productList.length - 1];
  }
}
