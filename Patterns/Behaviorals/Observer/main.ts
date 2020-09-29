/**
 * Imagine you´re in a multi player game and the game has an store to publish and sell any kind of products.
 * If you want to be notified  every time a product of your interest is published you need to subscribe to the category.
 * For simplicity we´re gonna assume there is just one category of product
 */

import Store from './Store.ts';
import Player from './Player.ts';
import Product from './Product.ts';
const store = new Store();
const player1 = new Player(store, 'Pedro');
const player2 = new Player(store, 'Alan');
store.add(player1);
store.add(player2);
//create a new product
const product1 = new Product('golden jewel', 3000);
const product2 = new Product('silver jewel', 2000);

store.addProduct(product1);
store.addProduct(product2);
