//rest parameters -> Allows indefinite number of parameters
//                     (packs arguments into arrays)

let a = 1;
let b= 2;
let c = 3;
let d = 4;

console.log(sum(a,b));    
console.log(sum(a,b,c))

//If we used traditional parameter passing, we would have to declare a new function for every newer argument
// For example we would need function sum1(a,b,c) to accept 3 arguments and sum2(a,b,c,d) to accept 4 arguments
// By using rest parameter (basically ...), we can accept an infinite numbers of parameters
// These accepted parameters turn into an array which we can go through manually to access every element required

//for example: 

function sum(...numbers){ //By preceding ... infront of numbers, we have essentially created numbers array which holds all the incoming parameters. 
    //There could be one, two , three or any numbers of parameters and it would be accepted
    let total=0;
    for (let number of numbers){ //now this accesses every element like we would do for any array
    total += number;
    return total;
    }
}

//Note to self: spread operator and rest parameter both use the same syntax with three dots infront of the variable