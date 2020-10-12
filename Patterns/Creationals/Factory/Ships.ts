import Obstacles from './iObstacles.ts';

export default class Ships implements Obstacles {
  damageOnCrash(): number {
    return 20;
  }
}
