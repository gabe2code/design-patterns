/**
 * Imagine that you´re trying to connect to a online game, by default, you´ll be connected to the best server by default according to have less
 * latency for the game. The calculation of the latency will be give it according to your location. To enclose that kind of complex logic and 
 * make it easy to maintain, the facade pattern will be useful.
 */

import Player from './Player.ts';

const player1 = new Player('Kratos', 'GTA');
const player2 = new Player('Miracle', 'Dota 2');
player1.playOnline();
player2.playOnline();
