 //  x=Math.PI; gives the value of pi
/* 

Here I have not defined x,y and z yet the values are being assigned.
This is because I have already assigned these variables in other files like "05" and "06"
So these variables are global variables and can be used anywhere

*/

Math.round(x); //rounds to nearest whole number
Math.floor(x); //rounds down
Math.ceil(x); //rounds up
Math.random(); //gives random number between 0 and 1
Math.pow(2,3); //gives 2 to the power of 3, which is 8
Math.sqrt(16); //gives the square root of 16, which is 4

console.log(x);

maximum=Math.max(x,y,z); //gives the maximum value among x,y and z
minimum=Math.min(x,y,z); //gives the minimum value among x,y and z

console.log(minimum);
console.log(maximum);