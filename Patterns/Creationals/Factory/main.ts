import ShapesFactory from './ShapesFactory.ts';

const shapesFactory = new ShapesFactory();
const triangle = shapesFactory.createShape('Triangle');
console.log(triangle.calcArea());
const rectagle = shapesFactory.createShape('Rectangle');
console.log(rectagle.calcArea());
