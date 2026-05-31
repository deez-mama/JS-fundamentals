//while loop -> while some conditionn is true, run some code

USERNAME = "";


//Here, window prompt allows the user to enter their name. 
// If we only had the "" condition, user could press exit and console would print Hello null! 
// SO, we check if its null too
// When we do that the prompt never disappears until USERNAME has been input by the user.
while(USERNAME == "" || USERNAME == null){ 
    USERNAME = window.prompt("Please enter your name: ");
    console.log("Hello " + USERNAME + "!");
}

//Be careful with infinite loops.



//Do while loop -> do some code once, then repeat it while some condition is true

let username2; //Here, username2 is undefined so it never enters the while loop


//This code snippet asks for username at first and then if its not entered then the type becomes null and so regular while loop continues.
do{
    username2=window.prompt("Please enter your name: ");
    console.log("Hello " + username2 + "!");
}while(username2 == "" || username2 == null);

//for loop -> repeat code limited number of times

for (let i =1; i <=10; i++){ 
    console.log(i);
}
