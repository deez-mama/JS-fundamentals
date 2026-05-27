
// Math.random();  generates a random number between 0 and 1 but if we cant for say rolling a dice, we multiply it by 6 
// and then round it down to the nearest whole number using Math.floor() and add 1 to get a number between 1 and 6.
let randomNumber = Math.floor(Math.random() * 6) + 1; //Added 1 because generally the output is 0 to 5 but we want 1 to 6

conosle.log(randomNumber);

//Change the "6" to any number depending upon the range needed