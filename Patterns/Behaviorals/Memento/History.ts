import EditorState from './EditorState.ts';

export default class History {
	states: EditorState[];
	constructor() {
		this.states = [];
	}
	push(state: EditorState) {
		return this.states.push(state);
	}
	pop() {
		return this.states.pop();
	}
}
