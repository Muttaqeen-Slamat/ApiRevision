// common js but the package.json must not include "type": "module"
// const {addition} = require('./addition')
import {addition} from './addition.js'
import {subtraction} from './subtraction.js'

console.log(addition(3, 6));
console.log(subtraction(7,3));
console.log(subtraction(3,7));