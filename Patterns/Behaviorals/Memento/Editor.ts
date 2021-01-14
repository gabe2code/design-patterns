import EditorState from './EditorState.ts';

/**
 * class Editor
 */
export default class Editor {
	content: string;
	constructor(content: string) {
		this.content = content;
	}
	createState(): EditorState {
		return new EditorState(this.content);
	}
	restoreState(state: EditorState): void {
		this.content = state.getContent();
	}
}
