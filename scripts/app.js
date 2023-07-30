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
// const posts = {
//     id: 1,
//     title: 'Post Title',
//     body: 'Post Body'
// }

// for(let post in posts) {
//     console.log(post); // id, title, body
//     console.log(posts[post]); // 1, Post Title, Post Body
// }

// const numbers = ['One', 'Two', 'Three', 'Four'];

// for(let number in numbers) {
//     console.log(number); // 0, 1, 2, 3
//     console.log(numbers[number]); // One, Two, Three, Four
// }

// for(let number of numbers) {
//     console.log(number);
// }

// const performOperation = (operation, a, b) => {
//     return operation(a, b);
// };

// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// const total = performOperation(add, 5, 3);
// const difference = performOperation(subtract, 10, 2);

// console.log('Total: ', total);
// console.log('Difference: ', difference);

/**
 * Note that, if you want to pass a function as argument in a function,
 * you do not include the open and closing parenthesis.
 * i.e: runFunc(myFunc)
 * 
 * If you want to pass the return value/result of the function,
 * you include the open and closing parenthesis.
 * i.e: runFunc(myFunc())
 **/

// const makeGreeting = () => {
//     console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
// }

// setTimeout(makeGreeting, 3000);

// setTimeout(() => {
//     console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
// }, 4000);

// setTimeout(function () {
//     console.log("Hope you get rich!");
// }, 5000);

// function init() {
    // This function is scoped only within this function
    // And can't be accessed/call from outside
    // function greet() {
        // console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
    // }

    // greet();
// }

// init(); // You can only access init() function, but not gree()

// let num1 = 5;
// let num2 = num1;
// console.log(num1, num2); // 5, 5

// num1 = 10;
// console.log(num1, num2); // 10, 5

/**
 * We set num1 = 5, then... we set another variable named num2 = num1
 * So, expectedly... num2 is also equals to 5. Both num1 & num2 is now equal to 5.
 * 
 * Now, we set again num1 = 10
 * 
 * Since num2 is set equal to num1. Does that mean num2 is also now equal to 10?
 * No, num2 is still equal to 5. 
 * 
 * So, when we set num2 = num1, this is not permanent.
 * This is just making num2 = 5 at the time at the time that we declare the variable.
 * But if we later change num1, it doesn't change num2. This is what happens when we are not using a pointer.
 **/

// const obj1 = { value: 8 };
// const obj2 = obj1;

// console.log(obj1, obj2); // {value: 8} {value: 8}

// obj1.value = 88;
// console.log(obj1, obj2); // {value: 88} {value: 88}

// console.log(obj1 === obj2); // 0x01 === 0x01 : true

// const obj3 = { value: 88 }; // 0x02
// console.log(obj1 === obj3); // 0x01 === 0x02: false

let a = 10;
let b = 'Hi';

let c = [1, 2];
let d = c;
d.push(3);

console.log(c, d); // [1, 2, 3], [1, 2, 3]

console.log(d === c); // d & c has the same memory address, hence: true

d = [4, 5, 6]; // Now that we set d to a new array values, it will create a new memory address location for the value
console.log(c, d); // [1, 2, 3], [4, 5, 6]

console.log(d === c);