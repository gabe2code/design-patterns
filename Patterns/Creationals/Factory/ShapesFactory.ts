import Shapes from './Shapes.ts';
import Triangle from './Triangle.ts';
import Square from './Square.ts';
import Rectangle from './Rectangle.ts';

export default class ShapesFactory {
	createShape(type: string): Shapes {
		switch (type) {
			case 'Triangle':
				return new Triangle();
			case 'Square':
				return new Square();
			case 'Rectangle':
				return new Rectangle();
			default:
				throw new Error(`${type} is not implemented Shape`);
		}
	}
}
