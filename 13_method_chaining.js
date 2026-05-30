let usname = "bro";

let letter=usname.charAt(0);
letter=letter.toUpperCase();

console.log(letter); //Outputs "B"

//Instead of doing all that we can use method chaining

letter=letter.charAT(0),toUpperCase();
console.log(letter); //Outputs "B"

//We can also do it directly on the string without storing it in a variable
console.log(usname.charAt(0).toUpperCase()); //Outputs "B"

//So method chaining is basically calling one method after another in one continuous line. 