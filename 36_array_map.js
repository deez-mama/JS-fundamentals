//array map -> executes a callback function once for each element AND creates a new array

let numbers = [1,2,3,4,5];

let squares = numbers.map(square);  // We basically created a new array by using numbers.map which took every element resulted from square function as its memeber
let cubes = numbers.map(cube);  //Same thing here but with the cube function


//The following lines are callback function for each element of the array squares and cubes respectively
squares.forEach(display); 
cubes.forEach(display);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function display(element){
    console.log(element)
}