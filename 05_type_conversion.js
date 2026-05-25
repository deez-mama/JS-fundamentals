//Type Conversion = change the dattatype of a value to another
//                  (strings, numbers, booleans, etc)

let Age =window.prompt("How old are you?");

// Age+=1; //This is a string so 20+1 becomes 201 instead of 21
console.log("Age variable is currently a " + typeof Age);

Age=Number(Age);
Age+=1; //Now it is a number
console.log ("Age variable is currently a " + typeof Age); 

console.log("Happy Birthday! You are now " + Age + " years old!");

let x;
let y;
let z;

x=Number("3.14");
y=String(3.14);
z=Booleaan("pizza"); //Gives false for emptyi.e "", anything else true)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);