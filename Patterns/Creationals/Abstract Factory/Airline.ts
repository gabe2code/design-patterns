import Rules from './Rules.ts';

export default interface Airline {
	AerolineRule(): Rules;
	Price(): number;
	Destiny(): string;
};
