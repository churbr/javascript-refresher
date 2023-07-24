# Javascript Refresher

## Data Types

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

* _Boolean_ - A simple yes/no vlaue type. Typically used in conditions.
```javascript
true/false
```
<br />

* _Null & Undefined_ - No value.
    - ```undefined``` - default if no value was assigned yet
    - ```null``` - explicitly assigned by developer (reset value)
<br />
<br />

* _Object_ - can be used to group multiple values together

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

###### When declaring variables, you have 2 types:
* _let_ - can be reassigned
* _const_ - permanent/constant/cannot be change
---
<br />
<br />

## Operators

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
---
<br />
<br />

## Functions

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

###### You can also create arrow functions, a syntax that is popular when you are dealing with anonymous function. A function that doesn't have a name

```javascript
() => {
    // Code here...
}

export default () => {
    // code here...
}
```

_If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses_

Instead of:
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

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of:
```javascript
number => { 
  return number * 3;
}
```

You could write:
```javascript
number => number * 3;
```

But if you're returning an object, you can do this:

```javascript
number => ({ age: number }); // Wrapping the object in extra parentheses
```

_By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned_