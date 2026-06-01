//2D array = An array of arrays

let fruits =     ["apple","banana","orange"];
let vegetables = ["carrots", "onions", "potatoes"]
let meats =      ["chicken", "fish", "sheep"];

let groceryList = [fruits, vegetables, meats]; //This is a 2 D array

groceryList[0][0]= "mango" //replaces apple with mango cause apple is in 0,0 location. 
//Similary, onion is in 1,1 location

for(list of groceryList){
    //console.log(list) -> prints out 3 arrays in the log. one array in one line
    for(let food of list){
        console.log(food); // prints out every element of the array like line 1: apples line 2: oranges and so on
    }
}