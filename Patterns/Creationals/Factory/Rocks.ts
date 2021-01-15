import Obstacles from './iObstacles.ts';

export default class Rock implements Obstacles {
  damageOnCrash(): number {
    return 30;
  }
}
