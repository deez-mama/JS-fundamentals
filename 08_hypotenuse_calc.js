let a;
let b;
let c;

/* 
    a = window.prompt("Enter the length of side a");
    a = Number(a);
    b = window.prompt("Enter the length of side b");
    b = Number(b);
    c=Math.pow(a,2) + Math.pow(b,2);
    c=Math.sqrt(c);
    console.log("Side c is " + c);
    
*/

    document.getElementById("HypotenuseButton").onclick = function(){
        a=Number(document.getElementById("sideA").value);
        b=Number(document.getElementById("sideB").value);
        c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        document.getElementById("HypotenuseResult").innerHTML = "Side c is " + c;
    }
