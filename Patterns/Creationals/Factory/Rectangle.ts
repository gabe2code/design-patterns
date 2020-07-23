import Shapes from './Shapes.ts';

export default class Rectangle implements Shapes {
	calcArea(): number {
		return 15;
	}
	drawShape(): Shapes {
		return new Rectangle();
	}
}
