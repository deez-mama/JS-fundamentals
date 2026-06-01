let Guess;
const number = Math.floor(Math.random() * 10) + 1;

document.getElementById("Guess_Btn").onclick = function(){

    Guess=Number(document.getElementById("Guess_Input").value);

    console.log(number);
    Guess==number? window.alert("Congrats! Correct Guess") : window.alert("Oops! Try Again");
    console.log(number);
}