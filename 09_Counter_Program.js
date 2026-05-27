let counter=0;

document.getElementById("decreaseButton").onclick = function(){
    counter--;
    document.getElementById("CounterLabel").innerHTML = counter;
}

document.getElementById("increaseButton").onclick = function(){
    counter++;
    document.getElementById("CounterLabel").innerHTML = counter;
}

document.getElementById("resetButton").onclick = function(){
    counter=0;
    document.getElementById("CounterLabel").innerHTML = counter;
}