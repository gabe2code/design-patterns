export default class User {
	name: string;
	lastname: string;
	birthday: Date;
	address: string;
	phone: string;

	constructor(name: string, lastname: string, birthday: Date, address: string, phone: string) {
		this.name = name;
		this.lastname = lastname;
		this.birthday = birthday;
		this.address = address;
		this.phone = phone;
	}
}
