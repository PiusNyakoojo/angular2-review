export interface Person {
	name: string;
	address: Address;
	hobbies: string[];
}

export interface Address {
	city: string;
	country: string;
	planet: string;
}