//setinterval -> invokes a function repeatedly after certain milliseconds
//               asynchronous function

let vount = 0;
let max = Number(window.prompt ("Count up to what number"));

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval();
    }
}
