import Rules from './Rules.ts';

export default class IberiaRules implements Rules {
	public DressCode(): string {
		return 'You should wear a coat';
	}
	public BehavioralCode(): string {
		return "Don't speak lauder and be please with people";
	}
}
