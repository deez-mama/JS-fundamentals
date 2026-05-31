happybirthday();
let name="John";


function happybirthday(){ //You don thave to pass global variables
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear "+ name);
    console.log("Happy birthday to you!");
}
//If we called this function inside another function, we would have to pass the variable as argument as it is local to that function