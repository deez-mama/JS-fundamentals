//error = object with a description that something went wrong

// For example: Can't open a file 
//              lose connection
//              User types incorrect input
//              Type error

//exectures a user defined error

//User defined error
try{
    let x = Number(window.prompt("Enter a number"));

    if(isNaN(x)) throw "Not a number";
    if(x=="") throw "You haven't enter a number";
    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes, regardless of errors");
}


//Type Error:

try{
    console.lag("Hey!");
}catch(error){
    console.log(error);
}