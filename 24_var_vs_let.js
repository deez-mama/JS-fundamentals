// variable scope -> defines where a variable can be accessed 

// var -> function scope       If it is defined inside a function, it can only be accessed within that function
// let -> block scope          It can only be defined within a block of code like if statement, for loop.
// for (let i=0;...;...){  .....     } If we access i outside this loop, its undefined but if we use var, its accessible outside the loop as well.

/* We can define a variable with both var and let outside any block and function.
In such case, var is avoided because it can change BROWSER"S WINDOW PROPERTY 


For example:
var name ="John";

If we go to browser console and type window and enter. Then in the name property we will see John.
This can be true for any other properties too. So we avoid using var and prefer let and const.

*/

let name ="John";