//A variable is a container for storing data
// A variable behavers as if it was the value it contains

//Two steps to declare a variable
//1. Declaration (var,let,const)
//2.Assignment (= assignment operator)


let firstName="Bishop"; //streings
let age; //numbers
age = 25;
let student=false; //boolean


//These display in the console

console.log("Hello", firstName);
console.log("Your age is", age, "years old");
console.log("Are you a student?", student);

//These display in the browser

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your age is " + age + " years old";
document.getElementById("p3").innerHTML = "Are you a student? " + student;



//Summary of this code snipppet: 
// Variables can be declared using var, let or const but we prefer let and const
// Variables can store different types of data such as strings, numbers and booleans
// Varibles are displayed in the console using "console.log()" where "," is used as concatination operator tpo combine strings and variables
//Variables are displayed in browser using "document.getElementById().innerHTML" where "+" is used as concatination operator
