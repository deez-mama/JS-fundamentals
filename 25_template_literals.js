/*
Template literals -> delimited with (`)
used instead of single or double quotes

*/

let username="Bishow";
let items = 3;
let price = 50;


/*
For example let's see the following code:

console.log("Hello, " + username);
console.log("You have " + items " items in your cart");
console.log("The cost is $" + price);


*/

console.log(`Hello ${username}`);
console.log(`You have ${items} items in your cart`);
console.log(`The total cost is $${price}`);

//another way of doing this:

let text = 
`Hello ${username}
You have ${items} items in your cart
The total cost is $${price}
`

//to print in HTML file, just get a label and use document.getElementById("label_id").innerHTML = text;

