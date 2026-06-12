
let element = document.getElementById("Head1");

element.style.backgroundColor = "lightgreen";


//We can also access through names


// let fr = document.getElementsByName("fruits");
// console.log(fruits[0]);

//Say, we have a "checked" property in some elements with the name "fruits", we can do the following code print only the ones with the property

// fruits.forEach(fruit=>{
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })

//Also doable with lists

// let a = document.getElementsByTagName("li");
// a[0].style.backgroundColor="lightgreen";

//To access with class names:
//let c = getElementsByClassName("_classname_")

let element = document.querySelector("#Head1"); // We can select by id, class, name or anything in this
// If selected by id  use #
// class use .
// "[for]" to select first element with for 
// Note that it only displays the first element of a particular list or class 
//to select all, we use:

// let elements = document.querySelectorAll("_name_id_or_anything_really")
element.style.background = "lightgreen";