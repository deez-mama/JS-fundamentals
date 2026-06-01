//toLocaleString() = returns a string to a differentform of representation

//Syntax:  number.toLocaleString(locale,{options});
// 'locale' : specify the language (undefined = default set in browser)
// 'options' : for formatting options


let myNum=123456.789;
Num2 = 1;

myNum = myNum.toLocaleString("en-US") // would give 123,456.789
myNum = myNum.toLocaleString("hi-IN") // would give 1,23,456.789
myNum = myNum.toLocaleString("de-DE") // would give 123.456,789
// Basically number format depending on the country. The things in the bracket are called format codes.

myNum = myNum.toLocaleString("en-US", {style: "currency" , currency : USD}); // would give $123,456.79
myNum = myNum.toLocaleString("hi-IN",{style:"currency", currency:INR}); // would give "rupee wala sybmol" 1,23,456.79
myNum = myNum.toLocaleString("de-DE",{style:"currency", currency: EUR}) // would give 123.456,79 "euro_symbol"

//There are other styles besides currency too:

Num2=num2.toLocaleString("undefined",{style:"percent"}); // .5 becomes 50%

Num2=num2.toLocaleString("undefined",{style:"unit", unit: "celsius"}); // gives celsius. There also exist units for km, fahrenheit etc




