// AND -> &&
// OR -> ||
// NOT -> !

let temp = 25;
let sunny = true;

if(temp >= 0 && temp <= 30){ // both conditions have to be true for the code to run
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}

let day = "Saturday";

if(day == "Saturday" || day == "Sunday"){ // only one condition has to be true for the code to run
    console.log("It is the weekend!");
}
else{
    console.log("It is a weekday!");
}   

if(!(day == "Saturday" || day == "Sunday")){ // the code will run if it is not the weekend
    console.log("It is a weekday!");
}
else{
    console.log("It is the weekend!");
}

if(!sunny){
    console.log("It is not sunny outside!");
}
else{
    console.log("It is sunny outside!");
}