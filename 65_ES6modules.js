// Modules are basically files with reusable code
// We can import sections of code, like particular functions and variables or we can import everything

import * as mathutil from "./MathsUtil.js"
//We can also do:

//import {PI, raidus, getArea, getCircumferece} from "./MathsUtil.js"
//If we do this, then we dont have to use mathutil.radius to access radius
//We can simply write radius to access radius.

console.log(mathutil.getCircumference(mathutil.radius)); //uses the value of radius present in MathUtil file
console.log(mathutil.getCircumference(10)); //passes 10 to the function


console.log(mathutil.getArea(mathutil.radius));
console.log(mathutil.getArea(10));