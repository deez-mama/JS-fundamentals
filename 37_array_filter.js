//array.filter() = creates a new array with all the elements that pass the test provided by a function

let age = [18,19,16,15,14];

let adults = age.filter(checkAge);

adults.forEach(display);

function checkAge(element){
    return element >=18; 
}

function display(element){
    console.log(element);
}
