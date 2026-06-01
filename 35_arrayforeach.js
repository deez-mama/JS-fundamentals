//for each -> Basically shortened for loop. 
// It executes a provided callback function for each element of the array. Complicated wala definition 


let students= ["spongebob", "patrick", "sandy"];

students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){ //Here element is initially spongebob, index 0 and array is the students array. 
    //First goes through spongebob and then loops until the end of the array so all indexes are met and stored
    array[index]=element[0].toUpperCase() + element.substring(1);
    //students[0]= S(turned 0th index of spongebob into capital) + pongebob (string starting from index 1 to the end is concatenated)
    //This continues for all the remaining elements of the array. 
}

function print(element){
    console.log(element);
}