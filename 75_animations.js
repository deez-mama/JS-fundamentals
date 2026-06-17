const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let degree = 0;
    let x = 0;
    let y =0;
    let scaleX=1;
    let scaleY=1;

    timerId = setInterval(frame, 5);

    function frame(){

        if(x>=200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degree +=5; //higher the number faster the spin
            x+=1;
            y+=1;
            scaleX+=0.01;
            scaleY+=0.01;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+ degree + "deg)";
            myAnimation.style.transform = "scale("+ scaleX + " , " + scaleY+")";
        }
    }
}