// import * as util from "./util.js"
// import { API_KEY, abc } from "./util.js"
// import { API_KEY, abc as content } from "./util.js"
// import API_KEY from "./util.js";

// console.log(util.abc);

// Classes & Objects

/** Objects **/

const user = {
    name: 'Fisherman',
    age: 21,
    greet() { // Objects can also store functions
        console.log(`Hello ${this.name}!`);
    }
}

// console.log(user.name);
// console.log(user);
user.greet();


/** Classes **/

class User { // Blueprint
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello ' + this.name);
    }
}

const object = new User('Friday!');

object.greet();