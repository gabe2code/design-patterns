import UserBuilder from './UserBuilder.ts';

const builder = new UserBuilder();

builder.addName('John');
builder.addLastName('Doe');
builder.addBirthday(new Date('1987-04-23T05:00:00'));
builder.addAddress('1st street');
builder.addPhone('23541564');
const user = builder.build();
console.log(user);
