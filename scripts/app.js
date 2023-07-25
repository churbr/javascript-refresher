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
// const usernames = ['friday', 'fisherman', 'economist'];
// console.log(usernames[1]);
// console.log(usernames);

// usernames.push('capitalist');

// console.log(usernames);


/**
 * findIndex() returns the index of the array value provided, -1 if found nothing
 * It takes an anonymous function
 * And this anonymous is executed for every item of the array
 * **/

// const index = usernames.findIndex((item) => {
//    return item === 'fisherman'; // 1
// });

// const index = usernames.findIndex(item => item === 'fisherman');

// console.log(index);

/**
 * .map() transforms an array to another array
 * **/

// const newUsernamesStr = usernames.map(username => username + '!'); // Adds exclamation mark on every string value of array, e.g: 'fisherman!'
// console.log('Old usernames: ', usernames);
// console.log('Transformed username str: ', newUsernamesStr);

// const usernamesToObj = usernames.map(username => ({ text: username })); // Converts every element of the array to object
// console.log('Transformed usernames to object: ',  usernamesToObj);

/**
 * Extracting values from an array
 * In this way, wherever you position a variable on the left side
 * Its value will be equal to it's equivalent positon of data in the right
 * And you can name any variable you want, because they are extracted by position
 **/
// const [color1, color2, color3] = ['Red', 'Green', 'Blue'];
// console.log('Colors: ', color1, color2, color3); // Colors:  Red Green Blue

// const [color1, color2, color3] = ['Red'];
// console.log('Colors: ', color1, color2, color3); // Colors:  Red undefined undefined

/**
 * For objects, its stricter.
 * You have to name the variable the same as property name in the object
 * Because in objects, data are extracted by property
 * In arrays, data is extracted by position
 **/

// const userInfo = {
//     username: 'fisherman',
//     fullName: 'Bruce Lee',
//     age: 32
// }

// const { username, fullName, age } = userInfo;
// console.log('Extracted info: ', username, fullName, age);

/**
 * You could use an alias
 * Below is an example of creating an alias for username property
 * And we set an alias of id
 **/

// const { username: id, fullName, age } = userInfo;
// console.log('Extracted info: ', id, fullName, age);
// You'll get a reference error if you tried to print `username` in console