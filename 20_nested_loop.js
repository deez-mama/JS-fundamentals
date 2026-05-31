

let rows=5;
let columns=5;


for (let i = 1; i <= rows; i++){
    for (let j = 1; j <= columns; j++){
       document.getElementById("Rectangle").innerHTML += "*";
    }
    document.getElementById("Rectangle").innerHTML += "<br>";
}