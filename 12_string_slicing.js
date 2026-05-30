let FullName="Bishowjeet Bhandari";

firstName=FullName.slice(0,FullName.indexOf(" ")); //Doesn't include the space, it slices the string from index 0 to the index of first space

lastName=FullName.slice(FullName.indexOf(" ")+1); // First element is included so we do +1. And for the end index, it automatically goes to the end

console.log(firstName); //Outputs "Bishowjeet"
console.log(lastName); //Outputs "Bhandari"
