// const = a variable that can't be changed

const PI = 3.14159; //Now pi can not be changed, it is a constant value
let radius;
let circumference;

document.getElementById("myButton2").onclick = function(){
    radius=Number(document.getElementById("myRadius").value);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("myLabel2").innerHTML = "The circumference of circle with radius " + radius + " is " + circumference+ " ";

}

