export default class EditorState {
	private content: string;

	public getContent(): string {
		return this.content;
	}

	public setContent(content: string): void {
		this.content = content;
	}

	constructor(content: string) {
		this.content = content;
	}
}
