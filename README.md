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

Regular function declaration:

```javascript
function greetUser(username, message) { }
```

Function with parameters:
```javascript
function greetUser(username, message) { }
```

Function with parameters with default value:
```javascript
function greetUser(username, message = "Hello") { }
```

Function that returns a value:
```javascript
function createGreetings(username, message) {
    return username + " " + message;
}

console.log(createGreetings("Fisherman", "Hello!"));
const greeting = createGreetings("Fisherman", "Hello!");
console.log(greeting);
```

You can also create **arrow functions**, a syntax that is popular when you are dealing with <span style="color: green; font-weight: bold">anonymous function</span>, a function that doesn't have a name.

```javascript
() => {
    // Code here...
}

export default () => {
    // code here...
}
```

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

```javascript
/**
 * Extracting values from an array
 * In this way, wherever you position a variable on the left side
 * Its value will be equal to it's equivalent positon of data in the right
 * And you can name any variable you want, because they are extracted by position
 **/
const [color1, color2, color3] = ['Red', 'Green', 'Blue'];
console.log('Colors: ', color1, color2, color3); // Colors:  Red Green Blue

// const [color1, color2, color3] = ['Red'];
// console.log('Colors: ', color1, color2, color3); // Colors:  Red undefined undefined

/**
 * For objects, its stricter.
 * You have to name the variable the same as property name in the object
 * Because in objects, data are extracted by property
 * In arrays, data is extracted by position
 **/

const userInfo = {
    username: 'fisherman',
    fullName: 'Bruce Lee',
    age: 32
}

// const { username, fullName, age } = userInfo;
// console.log('Extracted info: ', username, fullName, age);

/**
 * You could use an alias
 * Below is an example of creating an alias for username property
 * We set the alias for username as id
 * If you try to print username in console, you will get a reference error
 **/

const { username: id, fullName, age } = userInfo;
console.log('Extracted info: ', id, fullName, age);
```