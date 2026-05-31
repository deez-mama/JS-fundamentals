//returns a value back to the place where you called the function

function add(num1, num2){
    return num1 + num2; //the function will stop executing as soon as it hits the return statement and will return the value to where the function was called
}

let num1=5;
let num2=10;
let sum=add(5,10);
console.log(sum);
