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

/**
 * Destructuring in function parameters
 * **/

// function storeInfo({ name, age }) {
//     console.log(`Hello ${name}, age of ${age}`);
// }

// const info = {
//     name: 'Bruce',
//     age: 32
// }

// storeInfo(info);

// ----------------------------------------------------------------------------------

// Spread Operator
// The spread operator unpacks an array into separate arguments


// const fruits = ['Apple', 'Banana'];
// const newFruit = ['Orange', 'Mango'];

// const allFruits = [fruits, newFruit]; 
// const spreadFruits = [...fruits, ...newFruit]; // Using spread operator

// console.log(allFruits);

/**
 * Output is a nested array without using by putting it this way: [fruits, newFruit]
 * [
 * 0: [ "Apple", "Banana" ],
 * 1: ["Orange", "Mango"]
 * ]
**/

// console.log(spreadFruits);

/**
 * Output using spread operator i.e: [...fruits, ...newFruit]
 * All of values/elements from those arrays are pulled out,
 * and then added them as stand-alone elements of the array
 * ['Apple', 'Banana', 'Orange', 'Mango']
 **/

// Spread Operator on Objects

// const role = {
//     isAdmin: true   
// }

// const user = {
//     name: 'Donnie Yen',
//     age: 59,
//     ...role // Here, we pulled out the `isAdmin` property and added to user object
// }

// console.log('User: ', user); // Output: { name: 'Donnie Yen', age: 59, isAdmin: true }

// Rest Operator
// While spread operator unpacks an array into separate arguments
// the rest operator collects all the remaining elements into an array

// function listTodos(...todos) { // Here, we get the rest of arguments, using rest operator
//     const todoList = todos.map(todo => {
//         return todo;
//     });

//     console.log(todoList);
// }

// listTodos('Exercise', 'Workout', 'Reading', 'Working');

// Another example:

// function multiply(multiplier, ...rest) {
//     return rest.map((element) => {
//         return multiplier * element; // Multiply each element by multiplier 8 starting from 2nd argument 1
//     });
// }

// multiplier = 8
// ...rest = 1, 2, 3, and so on
// const product = multiply(8, 1, 2, 3);

// console.log('Product: ', product); // Result: [8, 16, 24]

// spread operator unpacks elements
// rest parameter packs elements

// const password = prompt("Enter password:");

// if(password === "Hello") {
//     console.log("Hello is correct!")
// }else if(password === "hello") {
//     console.log("hello is OK!")
// }else {
//     console.log("Access denied!");
// }

// Control Structures

// For ... in - loops through property names of an object & index of an array
// For ... of - Arrays only (iterable), not for objects
const posts = {
    id: 1,
    title: 'Post Title',
    body: 'Post Body'
}

for(let post in posts) {
    console.log(post); // id, title, body
    console.log(posts[post]); // 1, Post Title, Post Body
}

const numbers = ['One', 'Two', 'Three', 'Four'];

for(let number in numbers) {
    console.log(number); // 0, 1, 2, 3
    console.log(numbers[number]); // One, Two, Three, Four
}

for(let number of numbers) {
    console.log(number);
}