//callback -> a function passed as an argument to another function
// It tells the function to call the next function (which is passed as argument) after we call the current function

sum(2,3,displayConsole); //don't add () cause that would invoke the function. 

function sum (x,y,callback){
    total=x+y;
    callback(total); //We pass total cause the displayConsole function takes one argument.
}


function displayConsole(result){
    console.log(result);
}