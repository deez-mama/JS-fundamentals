// Two ways to go through arrays: 1. standard for loop 2. for of

let prices = [5,10,15,20];

for(let i=0;i<prices.length;i++){
    console.log(prices[i]);
}

//to print in descending order
for(let i=prices.length-1;i>0;i--){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);
}