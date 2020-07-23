import Shapes from './Shapes.ts';

export default class Triangle implements Shapes {
	calcArea(): number {
		return 10;
	}
	drawShape(): Shapes {
		return new Triangle();
	}
}
