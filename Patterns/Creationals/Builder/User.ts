export default class User {
	name: string;
	lastname: string;
	nickname: string;
	birthday: Date;
	address: string;
	phone: string;

	constructor(name: string, lastname: string, birthday: Date, address: string, phone: string, nickname: string) {
		this.name = name;
		this.lastname = lastname;
		this.nickname = nickname;
		this.birthday = birthday;
		this.address = address;
		this.phone = phone;
	}
}
