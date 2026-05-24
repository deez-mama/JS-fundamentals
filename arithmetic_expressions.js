/*
arithmetic expression is a combination of
operands (values, variables, etc)
operators (+,-,/,*,%, etc.)
that can be evaluated to a value
ex y= x+5;
*/

let students=20;

//students=students+5;
//OR, student +=5;

let extraStudents=students % 3; //
students %=3; //extrastudent %= 3 doesnt work because it is not declared as a variable, it is just a value that is being calculated and assigned to students variable



console.log(students);

//OPERATOR PRECEDENCE  BODMAS
//1. Parentheses
//2. Exponents
//3. Multiplication and Division (left to right)
//4. Addition and Subtraction (left to right)

let result = 1 + 2 * (3+4) -5;
console.log(result);