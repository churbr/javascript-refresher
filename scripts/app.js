// import * as util from "./util.js"
// import { API_KEY, abc } from "./util.js"
// import { API_KEY, abc as content } from "./util.js"
// import API_KEY from "./util.js";

// console.log(util.abc);

// Classes & Objects

/** Objects **/

// const user = {
//     name: 'Fisherman',
//     age: 21,
//     greet() { // Objects can also store functions
//         console.log(`Hello ${this.name}!`);
//     }
// }

// console.log(user.name);
// console.log(user);
// user.greet();


/** Classes **/

// class User { // Blueprint
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Hello ' + this.name);
//     }
// }

// const object = new User('Friday!');

// object.greet();

// Array index        0           1            2
const usernames = ['friday', 'fisherman', 'economist'];
// console.log(usernames[1]);
// console.log(usernames);

usernames.push('capitalist');

// console.log(usernames);


/**
 * findIndex() returns the index of the array value provided, -1 if found nothing
 * It takes an anonymous function
 * And this anonymous is executed for every item of the array
 * **/

// const index = usernames.findIndex((item) => {
//    return item === 'fisherman'; // 1
// });

const index = usernames.findIndex(item => item === 'fisherman');

console.log(index);

/**
 * .map() transforms an array to another array
 * **/

const newUsernamesStr = usernames.map(username => username + '!'); // Adds exclamation mark on every string value of array, e.g: 'fisherman!'
console.log('Old usernames: ', usernames);
console.log('Transformed username str: ', newUsernamesStr);

const usernamesToObj = usernames.map(username => ({ text: username })); // Converts every element of the array to object
console.log('Transformed usernames to object: ',  usernamesToObj);