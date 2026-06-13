let element = document.querySelector("#vegetable");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

let elem2 = document.querySelector("#fruit");
let son = elem2.children[1];
son.style.backgroundColor = "skyblue";
console.log(child);