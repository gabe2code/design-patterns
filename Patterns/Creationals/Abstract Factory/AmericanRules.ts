import Rules from './Rules.ts';

export default class AmericanRules implements Rules {
	public DressCode(): string {
		return 'You should be dressed with summer clothe';
	}
	public BehavioralCode(): string {
		return 'Be kind and friendly';
	}
}
