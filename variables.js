//A variable is a container for storing data
// A variable behavers as if it was the value it contains

//Two steps to declare a variable
//1. Declaration (var,let,const)
//2.Assignment (= assignment operator)


let firstName="Bishop"; //streings
let age; //numbers
age = 25;
let student=false; //boolean




console.log("Hello", firstName);
console.log("Your age is", age, "years old");
console.log("Are you a student?", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your age is " + age + " years old";
document.getElementById("p3").innerHTML = "Are you a student? " + student;