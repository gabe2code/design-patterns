/**
 * Imagine the behavior of the steam platform that always going to check if you have a compatible version of the game that you will going to
 * play, if your version is compatible will proceed to load the maps, characters and so on, if is not, it just going to throw an error.
 * This is kind of a super simple example, but will help you to understand when will be good to apply this pattern
 */

import Dota2 from './Dota2.ts';
import AmongUS from './AmongUs.ts';

let clientDota = new Dota2(5.02);
clientDota.createGame();

let amongClient = new AmongUS(0.05);
amongClient.createGame();
