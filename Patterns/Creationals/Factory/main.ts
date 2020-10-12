/**
 * Imagine a game where you have to avoid obstacles with a ship, some kind of galaxy survival (xD), but you need to choose
 *  what kind of obstacles you will need to show based on how far you go in the game (this will be more complex based maybe on the level of 
 * difficulty that you pick, but i just tried to make it simple for the example ). 
 */
import ObstaclesFactory from './ObstaclesFactory.ts';

const factory = new ObstaclesFactory();
const obstacle1 = factory.createObstacle(2);
console.log(obstacle1.damageOnCrash());
const obstacle2 = factory.createObstacle(6);
console.log(obstacle2.damageOnCrash());
