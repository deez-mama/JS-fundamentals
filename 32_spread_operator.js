//spread operator = umpacks the elements

let numbers = [1,2,3,4,5,6,7,8,9];
let name= "Bis Bha"
console.log(numbers); //Displays array in detailed form
console.log(...numbers); //Displas 1 2 3 4 5 ... 9 in a serial order. Not in detailed array format

console.log(...name); //Displays B i s   B h a

//Basically spreads the output


let maximum = Math.max(...numbers);
console.log(maximum); //Prints out the maximum cause we used spread operator "..." If we did not, output would be NaN

let class1= ["Spongebob", "Patrick", "Sandy"];
let class2=["Squidward", "Mr.Krabs", "Plankton"];

// class1.push(class2) pushes the whole array class2 as the 3rd index of class1
// So we unpack it with spread operator so individual elements can be pushed

class1.push(...class2);
