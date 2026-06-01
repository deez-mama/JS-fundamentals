//returns a value back to the place where you called the function

function add(num1, num2){
    return num1 + num2; //the function will stop executing as soon as it hits the return statement and will return the value to where the function was called
}

let num1=5;
let num2=10;
let sum=add(5,10);
console.log(sum);

/*
    A thing I learnt:
    When I pass num1 and num2 as a,b a will copy num1 into a separate memory location and same with b and num2
    This is the property of primitive data types. It follows pass by value method.
    When I pass an arraty or an object however, it follows pass by reference.
    Meaning changing the passed parameter changes the original.
*/