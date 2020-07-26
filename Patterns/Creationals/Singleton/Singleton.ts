export default class SingletonGame {
	private static instance: SingletonGame;
	private constructor() {
		console.log("you can't create direct instances from a singleton method");
	}
	public static getInstance(): SingletonGame {
		if (!SingletonGame.instance) {
			return (SingletonGame.instance = new SingletonGame());
		} else {
			return SingletonGame.instance;
		}
	}
}
