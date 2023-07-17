/***
 * The following codes are called `named exports`
 * You can use them by using the following imports:
 * 
 * import * as utils from "./util.js"
 * import { API_KEY, abc } from "./util.js"
 * import { API_KEY, abc as content } from "./util.js"
 * 
*/

export let API_KEY = 'cac35ec206d868b7d7cb0b55f31d9425b075082b';
export let abc = 'abc';

/**
 * You must have only one `export default` per file
 * To use this, you do the following import:
 * import API_KEY from "./util.js";
 **/
export default "Default Export";