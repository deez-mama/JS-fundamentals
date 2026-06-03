//arrow function = alternative to a regular function expression
// =>

    //write a function expression first


/*
    const percent = function(x,y){
        return x/y *100;
    }
 
    
*/

//Let's use an arrow function instead

//first: remove the "function" keyword and add the arrow "=>"

// const percent = (x,y) => { return x/y *100;}

//second: if there is only one expression in the function body, we can remove the curly braces'{}' and the "return" keyword
//Note : we keep both return and curly braces if there are more than one expression in the function body

    const percent = (x,y) => x/y *100;
    
    console.log(`${percent(5,10)}%`); //50%

    //sum using arrow function
    const sum = (a,b) => a+b;

    console.log(sum(5,10));

    //difference using arrow function
    const subtract = (a,b) => a-b;

    console.log(subtract(10,5));

    //product using arrow function
    const product = (a,b) => a*b;

    console.log(product(5,10));



// Lets do the sorting numbers program with various techniques:
//The following is the tradition way 
/*
let grades = [100,50,90,60,70];

grades=grades.sort(desSort);
grades.forEach(display);
grades=grades.sort(ascSort);
grades.forEach(display);

function desSort(x,y){
    return y-x;
}

function ascSort(x,y){
    return x-y;
}

function display(element){
    console.log(element);
}
*/

/*The following is by using function expression:

let grades = [100,50,90,60,70];

grades=grades.sort(function desSort(x,y){
    return y-x;
});

});
grades=grades.sort(function ascSort(x,y){
    return x-y;
});

grades.forEach(function display(element){
    console.log(element);

//All we have done is replaces named functions with anonymous functions.


*/

//Now lets use arrow functions:

let grades = [100,50,90,60,70];

//fordescending order
grades=grades.sort((x,y) =>  y-x);
//display the sorted array
grades.forEach((element)=> console.log(element));
//for ascending order
grades=grades.sort((x,y) => x-y);
//display the sorted array
grades.forEach((element)=> console.log(element));