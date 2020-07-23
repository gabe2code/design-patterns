import User from './User.ts';

export default class UserBuilder {
	name: string;
	lastname: string;
	birthday: Date;
	address: string;
	phone: string;
	constructor() {
		this.name = '';
		this.lastname = '';
		this.birthday = new Date();
		this.address = '';
		this.phone = '';
	}
	addName(name: string): void {
		this.name = name;
	}
	addLastName(lastname: string): void {
		this.lastname = lastname;
	}
	addBirthday(birthday: Date): void {
		this.birthday = birthday;
	}
	addAddress(address: string): void {
		this.address = address;
	}
	addPhone(phone: string): void {
		this.phone = phone;
	}
	build(): User {
		return new User(this.name, this.lastname, this.birthday, this.address, this.phone);
	}
}
