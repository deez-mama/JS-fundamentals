
const player = document.getElementById("player");

window.addEventListener("keydown", move);
let x = 0;
let y = 0;



function move(event){

    switch(event.key){
        case "ArrowDown":
            y=y+5;
            player.style.top = y + "px";
            break;
        case "ArrowUp":
            y=y-5;
            player.style.top = y + "px";
            break;
        case "ArrowLeft":
            x=x-5;
            player.style.left = x + "px";
            break;
        case "ArrowRight":
            x=x+5;
            player.style.left = x + "px";
            break; 
        default:
            break;
    }

}