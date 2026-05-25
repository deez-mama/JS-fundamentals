//How to accept user input

//EASY WAY
/*
let username=window.prompt("What is your name?");
console.log(username);
*/


//HARD WAY  -> Using HTML



let username;

document.getElementById("myButton").onclick =function(){

    username =document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Thanks!" + username;
}