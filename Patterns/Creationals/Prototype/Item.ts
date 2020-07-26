import Prototype from './Prototype.ts';

export default class Item implements Prototype {
	readonly id: number;
	readonly damage: number = 10; // this is a fixed value just for the example
	constructor(id: number) {
		this.id = id;
	}
	clone(id: number): Prototype {
		return new Item(id);
	}
}
