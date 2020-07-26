/**
 * Imagine you have you´re playing a multiplayer game, the first player(normally who creates the game party) 
 * need to load a lot of data to start(map, clothes, wapongs.. etc), but the other players just obtain the same instance of the game.
 */
// @ts-ignore
import SingletonGame from './Singleton.ts';

const instance = SingletonGame.getInstance();

//let's play !!!
