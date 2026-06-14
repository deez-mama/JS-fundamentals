//One event is .onlick, which I've already explored so I wont go into that

let element = document.body;

element.onload = doSomething; //its a callback so dont add ()
// or you can also add it directly onto the HTML element
//<body onload = "doSomething()">

element.onchange = doSomething; //activates when an element has changed
element.onmouseover = doSomething; //calls the function when mouse hovers on the section denoted by element
element.onmouseout = doSomething; //calls the function when mouse leaves the denoted section

element.onmousedown = doSomething; //same as .onclick, calls the function on click BUT it can be paired with .onmouseup
element.onmouseup = doSomething; //calls the function after you've let go of the mouse click




function doSomething(){
    alert("You did something");
}