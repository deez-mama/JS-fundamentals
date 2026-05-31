// Switch -> statement that examines a value against many cases
//           It is more efficient than running if else statements 

let grade = "B";

switch(grade){
    case "A":
        console.log("You did amazing!");
        break; // break is used to stop the code from running into the next case
    case "B":
        console.log("You did pretty good!");
        break;
    case "C":
        console.log("You did alright!");
        break;
    case "D":
        console.log("You did not do well!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade + " is not  valid grade!");
}

/* If grade was numerical we can do the following: 
let grade = 85;

switch(true){ 
    case grade >= 90:
        console.log("You did amazing!");
        break;
    case grade >= 80:
        console.log("You did pretty good!");
        break;
    case grade >= 70:
        console.log("You did alright!");
        break;
    case grade >= 60:
        console.log("You did not do well!");
        break;
    case grade < 60:
        console.log("You failed!");
        break;
    default:
        console.log(grade + " is not  valid grade!");
    
    
}

*/