//.addEvenetListener(event, function, useCapture);
//You can add many event handlers to one element



const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");

innerdiv.addEventListener("mouseover", changeRed);
outerdiv.addEventListener("mouseover", changeRed, true);

//Here both div overlap and both are listening for the same event in the same space.
//By default, the inner div is accessed before outer. 
//By setting useCapture as true for outerdiv, we make sure that it gets accessed first

function changeRed(){
    this.style.backgroundColor = "red";
}

function changeGreen(){
    innerdiv.style.backgroundColor = "lightgreen";
}




// document.addEventListener("DOMContentLoaded", function() {
//     const innerdiv = document.getElementById("innerdiv");

// innerdiv.addEventListener("mouseover", changeRed);
// innerdiv.addEventListener("mouseout", changeGreen);

// function changeRed(){
//     innerdiv.style.backgroundColor = "red";
// }

// function changeGreen(){
//     innerdiv.style.backgroundColor = "green";
// }

// });