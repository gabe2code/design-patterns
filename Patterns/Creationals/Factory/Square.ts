import Shapes from './Shapes.ts';

export default class Square implements Shapes {
	calcArea(): number {
		return 20;
	}
	drawShape(): Shapes {
		return new Square();
	}
}
