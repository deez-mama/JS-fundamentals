//ternary operator -> shortcut for if else statement.
// Takes 3 operands: 
// 1. A condition with ? 
// 2. expression if true 
// 3. expression if false

//condition? Trueexpression : Falseexpression;

(a>b)? console.log("a is greater than b") : console.log("b is greater than a");

checkWinner(false);

function CheckWinner(win){
    win? console.log("You win!") : console.log("You lose!");
}