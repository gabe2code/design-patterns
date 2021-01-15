import Obstacles from './iObstacles.ts';
import Ships from './Ships.ts';
import Animals from './Animals.ts';
import Rocks from './Rocks.ts';

export default class ObstaclesFactory {
  createObstacle(level: number): Obstacles {
    //its just to indicate there will be some kind of logic here to indicate whats the right concrete obstacle to return
    if (level <= 2) {
      return new Animals();
    }
    if (level <= 4) {
      return new Ships();
    }
    return new Rocks();
  }
}
