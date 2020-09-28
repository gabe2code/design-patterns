/**
 * Imagine a video game that has been implemented to play just as a single player, and later on, the implementation has to be changed to a multiplayer.
 * One of the solutions could be the adapter pattern
 */

import Adaptee from './Adaptee.ts';
import Adapter from './Adapter.ts';
import Player from './Player.ts';

let player1 = new Player('Spartan');
let adaptee = new Adaptee();
let adapter = new Adapter(adaptee);
player1.connect(adapter);
