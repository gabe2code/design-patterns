import ObstaclesFactory from './ObstaclesFactory.ts';

const factory = new ObstaclesFactory();
const obstacle1 = factory.createObstacle(2);
console.log(obstacle1.damageOnCrash());
const obstacle2 = factory.createObstacle(6);
console.log(obstacle2.damageOnCrash());
