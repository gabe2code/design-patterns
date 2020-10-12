import Obstacles from './iObstacles.ts';

export default class Animals implements Obstacles {
  damageOnCrash(): number {
    return 20;
  }
}
