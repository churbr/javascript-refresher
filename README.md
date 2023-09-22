# Javascript Refresher

### 1) Data Types

* _String_ - Text values, wrapped with single/double quotes. Can also be created with backticks (\`).
```text
"Hello World", 'Max', `Hi there`
```
<br />

* _Number_ - Positive/negative. With decimal point (float) or without it (int).
```text
5, -23, 3.14, -8.12
```
<br />

* _Boolean_ - A simple yes/no value type. Typically used in conditions.
```javascript
true/false
```
<br />

* _Null & Undefined_ - No value.
    - ```undefined``` - default if no value was assigned yet
    - ```null``` - explicitly assigned by developer (reset value)
<br />
<br />

* _Object_ - can be used to group different values together (e.g: _Fullname(string), age(number), birthday(date), etc..._). And are often used to represent entities or real-world objects. Objects are unordered collections of key-value pairs. Each key (property/attribute) is unique and acts as an identifier for its associated value. 

```javascript
const user = {
    name: 'Fisherman',
    age: 21,
    greet() {
        /**
         * Objects can also store functions
         * Which we then typically call methods
         * **/
        console.log(`Hello ${this.name}!`);
    }
}

// console.log(user.name);
// console.log(user);
user.greet();
```
<br />
<br />

* _Class_ - is a blueprint for creating objects that share the same structure and behavior

```javascript
class User { // Blueprint
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello ' + this.name + '!');
    }
}

// We then instantiate it with the help of a special *new* keyword
// Which creates a new object base on that blueprint (User class)
const object = new User('Friday');

object.greet();
```

When declaring variables, you have 2 types:
* _let_ - can be reassigned
* _const_ - permanent/constant/cannot be change
<br />
<br />

### 2) Operators

+ **\*** : Mathematical operator for multiply
+ **\/** : Mathematical operator for division
+ **\-** : Mathematical operator for subtraction
+ **\+** : Mathematical operator for addition, can also be used for string concatenation.
 > "Hello " + "World", output is: Hello World

**Operators used in conjunction with if() statements:**
+ **===** : Checking for equality. Returns a boolean value
+ **>** : Greater than
+ **<** : Less than
+ **>=** : Greater than or equals to
+ **<=** : Less than or equals to
<br />
<br />

### 3) Functions

###### Definitions
- **argument** — An argument is a value passed to a function
- **parameter** — A Parameter is a variable used in the declaration of a function
- **iterable** — A collection of something that we can iterate (loop) over. For example, an array or a list

```javascript
function print(params) {
  params.forEach(param => console.log(param));
}

print(['arg1', 'arg2']);
```
<br />

###### Regular functions

```javascript
function greetUser(username, message) { }
```

```javascript
// Function with parameters with default value
function greetUser(username, message = "Hello") { }
```

```javascript
// Function that returns a value
function createGreetings(username, message) {
    return username + " " + message;
}

const greeting = createGreetings("Fisherman", "Hello!");

console.log(createGreetings("Fisherman", "Hello!"));
console.log(greeting);
```
<br />

###### Arrow functions

_Regular arrow function_
```javascript
const validateUser = () => {
    // Code here...
}
```

_Anonymous arrow function_
```javascript
() => {
    // Code here...
}

export default () => {
    // code here...
}
```

###### Arrow function notes

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses. Instead of:
```javascript
(userName) => {
    // code here
 }
```

You could write:
```javascript
userName => {
    // code here
}
```


If your function doesn't have parameters, **parentheses must not** be omitted
```javascript
() => {
    // code here
}
```

If your function takes more than one parameter, you also **must not omit parentheses**:

```javascript
fullName, age => { ... } // This is INVALID
```

```javascript
(fullName, age) => { ... } // This is CORRECT
```

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword. Instead of:
```javascript
number => { 
  return number * 3;
}
```

You could write:
```javascript
number => number * 3;
```

But if you're returning an object:
```javascript
number => ({ age: number }); // Wrapping the object in extra parentheses
```

_By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned_
<br />
<br />

### 4) Arrays & Array Methods

Arrays are ordered collections of elements. Each element in an array has a numerical index, starting from 0, that determines its position in the array.\
\
Typically used to store a list of homogeneous data elements, meaning all elements have the same data type (e.g., _an array of numbers, strings, or objects of the same type_). Are commonly used for tasks that involve a collection of similar data, such as lists and stacks.

```javascript
// Array index        0           1            2
const usernames = ['friday', 'fisherman', 'economist'];
// console.log(usernames[2]); // economist
// console.log(usernames);

usernames.push('capitalist');

// console.log(usernames);


/**
 * findIndex() returns the index of the array value provided, -1 if found nothing
 * It takes an anonymous function
 * And this anonymous is executed for every item/element of the array
 **/

// const index = usernames.findIndex((item) => {
//    return item === 'fisherman'; // 1
// });
// Shorter code version of this below...

const index = usernames.findIndex(item => item === 'fisherman');

console.log(index);

/**
 * .map() transforms an array to another array
 **/

const newUsernamesStr = usernames.map(username => username + '!'); // Adds exclamation mark on every string value of array, e.g: 'fisherman!'
console.log('Old usernames: ', usernames);
console.log('Transformed username strings: ', newUsernamesStr);

const usernamesToObj = usernames.map(username => ({ text: username })); // Converts every element of the array to object
console.log('Transformed to object: ',  usernamesToObj);
```
<br />
<br />

### 5) Destructuring

Destructuring is another way of extracting values from an array and properties from objects, making it more readable and easy to manage.

###### Array Destructuring
<sub>Extracting values from an array. Wherever you position a variable on the left side. Its value will be equal to it's equivalent positon of data in the right. And you can name any variable you want when destructuring an array, because they are extracted by position</sub>

```javascript
const [color1, color2, color3] = ['Red', 'Green', 'Blue'];
console.log('Colors: ', color1, color2, color3); // Colors:  Red Green Blue

// const [color1, color2, color3] = ['Red'];
// console.log('Colors: ', color1, color2, color3);
// Output:
// Colors:  Red undefined undefined
```

###### Object Destructuring
<sub>Destructuring objects is stricter. You have to name the variable the same as property names within the object. Because in objects, data are extracted by property. Unlike in arrays, data is extracted by position</sub>

```javascript
const userInfo = {
    username: 'fisherman',
    fullName: 'Bruce Lee',
    age: 32
}

const { username, fullName, age } = userInfo;
console.log('Extracted info: ', username, fullName, age);

/**
 * You can use an alias
 * Below is an example of creating an alias for username property
 * We set the alias for username as id
 * If you try to print username in console, you will get a reference error
 **/

const { username: id, fullName, age } = userInfo;
console.log('Extracted info: ', id, fullName, age);
```

###### Destructuring in function parameters
```javascript
function storeInfo({ name, age }) {
    console.log(`Hello ${name}, age of ${age}`);
}

const info = {
    name: 'Bruce',
    age: 32
}

storeInfo(info);
```
<br />
<br />

### 6) Spread Operator

Spread operator (...) three dots, is use to flatten an object or an array. The spread operator unpacks an array into separate arguments

###### Arrays

```javascript
const fruits = ['Apple', 'Banana'];
const newFruit = ['Orange', 'Mango'];

const allFruits = [fruits, newFruit]; // Without spread operator
console.log(allFruits); // Outputs 2 nested array, i.e: [ 0: [ "Apple", "Banana" ], 1: ["Orange", "Mango"] ]

const spreadFruits = [...fruits, ...newFruit]; // Using spread operator
console.log(spreadFruits); // Outputs flattened array, i.e: ['Apple', 'Banana', 'Orange', 'Mango']
```

###### Objects
```javascript
const role = {
    isAdmin: true   
}

const user = {
    name: 'Donnie Yen',
    age: 59,
    ...role // Here, we pulled out the `isAdmin` property and added to user object
}

console.log('User: ', user); // Output: { name: 'Donnie Yen', age: 59, isAdmin: true }
```
<br />
<br />

### 7) Rest operator

While spread operator unpacks an array into separate arguments, Rest operator collects all the remaining elements into an array. Just remember, spread operator unpacks elements, rest operator packs elements.

```javascript
function listTodos(...todos) { // Here, we get the rest of arguments, using rest operator
    const todoList = todos.map(todo => {
        return todo;
    });

    console.log(todoList);
}

listTodos('Exercise', 'Workout', 'Reading', 'Working');
```

Another example using more than one argument
```javascript
function multiply(multiplier, ...rest) {
    return rest.map((element) => {
        return multiplier * element; // Multiply each element by multiplier starting from 2nd argument and the rest
    });
}

// multiplier = 8
// ...rest = 1, 2, 3, and so on
const product = multiply(8, 1, 2, 3);

console.log('Product: ', product); // Result: [8, 16, 24]
```
<br />
<br />


### 8) Control Structures

###### if statement
```javascript
const password = prompt("Enter password:");

if(password === "Hello") {
    console.log("Hello is correct!")
}else if(password === "hello") {
    console.log("hello is OK!")
}else {
    console.log("Access denied!");
}
```

###### For... in
_For ... in_ loops through property names of an object & index of an array.

In order to get the values, you have to refer the original object and use **[ ]** to define the properties of an object/indexes of the array

```javascript
const posts = {
    id: 1,
    title: 'Post Title',
    body: 'Post Body'
}

// for ... in object
for(let post in posts) {
    console.log(post); // id, title, body
    console.log(posts[post]); // 1, Post Title, Post Body
}

const numbers = ['One', 'Two', 'Three', 'Four'];

// for ... in array
for(let number in numbers) {
    console.log(number); // 0, 1, 2, 3
    console.log(numbers[number]); // One, Two, Three, Four
}
```

###### For... of
_For ... of_ is for arrays only (iterable), not for objects
```javascript
const numbers = ['One', 'Two', 'Three', 'Four'];

for(let number of numbers) {
    console.log(number); // One, Two, Three, Four
}
```
<br />
<br />

### 9) More on Functions

###### Function as arguments

Note that, when you want to pass a function in a function as argument, you do not include the open and closing parenthesis **( )**.

When you include the parenthesis after the function name, it invokes the function and passes the return value of the function as an argument, rather than passing the function reference itself.

> _runFunc(myFunc)_

<br />

User-created function with a function as argument:
```javascript
const performOperation = (operation, a, b) => {
    return operation(a, b);
};

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const total = performOperation(add, 5, 3);
const difference = performOperation(subtract, 10, 2);

console.log('Total: ', total);
console.log('Difference: ', difference);
```
<br />

Built-in function with function as argument:

```javascript
const makeGreeting = () => {
    console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
}

// Using in advanced-defined function
setTimeout(makeGreeting, 3000);

// Using anonymous arrow function
setTimeout(() => {
    console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
}, 4000);

// Using anonymous regular function
setTimeout(function () {
    console.log("Hope you get rich!");
}, 5000);
```

###### Function definition inside a function

```javascript
function init() {
    // This function is scoped only within this function
    // And can't be accessed/call from outside
    function greet() {
        console.log("恭喜發財 (Gōng Xǐ Fā Cái)");
    }

    greet();
}

init(); // You can only access init() function, but not gree()
```
<br />
<br />

### 10) Reference & Primitive values

In JavaScript, there are two main types of values: primitive values and reference values.

###### Primitive types
<sub>Value stored in <span style="color: gray; font-weight: bold;">stack</span> memory</sub>
- String
- int
- boolean
- undefined
- null
<br />

###### Reference types
<sub>Value stored in <span style="color: green; font-weight: bold;">heap</span> memory</sub>
- Arrays
- Objects
- Functions
<br />
<br />

###### Pass by value
```javascript
let num1 = 5;
let num2 = num1;
console.log(num1, num2); // 5, 5

num1 = 10;
console.log(num1, num2); // 10, 5
```
First, we set num1 = 5
Then, we set another variable named num2 = num1

So, expectedly... num2 is also equals to 5. Both num1 & num2 is now equal to 5.
 
Now, we set again num1 = 10
_Since num2 is set equal to num1. Does that mean **num2 is also now equal to 10?**_

**No, num2 is still equal to 5.**

So, when we set num2 = num1, it's not permanent.
This is just making num2 = 5 at the time at the time that we declare the variable. It's like we're just copying num1.

But if we later change num1, it doesn't change num2. <span style="color: green; font-weight: bold;">This is what happens when we are not using a pointer</span>
<br />
<br />

###### Pass by reference

_Example 1: Pass by reference in objects_
```javascript
const obj1 = { value: 8 };
const obj2 = obj1;

console.log(obj1, obj2); // {value: 8} {value: 8}

obj1.value = 88;
console.log(obj1, obj2); // {value: 88} {value: 88}

console.log(obj1 === obj2); // 0x01 === 0x01 : true

const obj3 = { value: 88 }; // 0x02
console.log(obj1 === obj3); // 0x01 === 0x02: false
```

_Varible_
| Variable | Value |
| --- | --- |
| obj1 | ```<0x01>``` |
| obj2 | ```<0x01>``` |
| obj3 | ```<0x02>``` |

_Memory_
| Address | Value |
| --- | --- |
| ```<0x01>``` | { value: 88 } |
| ```<0x02>``` | { value: 88 } |

<br />
<br />

_Example 2: Pass by reference in arrays_

```javascript
let a = 10;
let b = 'Hi';

let c = [1, 2];
let d = c;
d.push(3);

console.log(c, d); // [1, 2, 3], [1, 2, 3]
console.log(d === c); // d & c has the same memory address, hence: true

d = [4, 5, 6]; // Now that we set d to a new array values, it will create a new memory address location for the value

console.log(c, d); // [1, 2, 3], [4, 5, 6]
console.log(c === d); // 0x01 === 0x02: false
```

_Varible_
| Variable | Value |
| --- | --- |
| a | 10 |
| b | Hi |
| c | ```<0x01>``` |
| d | ```<0x02>``` |

_Memory_
| Address | Value |
| --- | --- |
| ```<0x01>``` | [ 1, 2, 3 ] |
| ```<0x02>``` | [ 4, 5, 6 ] |