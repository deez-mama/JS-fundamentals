// function expression -> a function without a name (also known as anonymous function)
// avoid polluting the global scope with names
//Write it and then forget about it 

const greeting = function(){
    console.log("Hello World");
}

greeting();

//An example we have already done before.

// document.getElementById("decreaseButton").onclick = function(){
//     counter--;
//     document.getElementById("CounterLabel").innerHTML = counter;
// }

//The above code is an example of function expression. 
// We are creating an anonymous function and assigning it to the onclick property of the decreaseButton element. 
// This allows us to define the behavior of the button without needing to create a separate named function.