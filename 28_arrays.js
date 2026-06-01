let fruits = ["apple","banana","orange"];


console.log(fruits[0]); 

fruits.push("watermelon"); //adds an element at the end
fruits.pop(); //removes last element
fruits.unshift("mango"); //adds mango at index 0
fruits.shift(); //removes element at index 0. In this case, mango

let length=fruits.length;
let index = fruits.indexOf("apple") //returns index of apple
//returns -1 if not found