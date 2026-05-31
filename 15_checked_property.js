
document.getElementById("CheckButton").onclick = function() {

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");


    if(myCheckbox.checked) {
        console.log("The checkbox is checked!");
    }
    else{
        console.log("The checkbox is not checked!");
    }

    if(visaBtn.checked) {
        console.log("You are paying with Visa!");
    }
    else if(mastercardBtn.checked) {
        console.log("You are paying with Mastercard!");
    }
    else if(paypalBtn.checked) {
        console.log("You are paying with PayPal!");
    }
    else{
        console.log("You have not selected a payment method!");
    }
}
