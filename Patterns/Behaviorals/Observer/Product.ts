export default class Product {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  /**
   * get getName
   */
  public get getName() {
    return this.name;
  }
  /**
   * get getPrice
   */
  public get getPrice() {
    return this.price;
  }
}
