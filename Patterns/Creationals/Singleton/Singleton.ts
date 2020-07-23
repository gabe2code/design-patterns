export default class Singleton {
	private static instance: Singleton;
	private constructor() {
		console.log("you can't create direct instances from a singleton method");
	}
	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			return (Singleton.instance = new Singleton());
		} else {
			return Singleton.instance;
		}
	}
}
