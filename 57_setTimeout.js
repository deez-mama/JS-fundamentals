// setTimeout() -> invokes a function after a number of milliseconds
//              It's an asychronous function (doesn't pause execution )

setTimeout(message => window.alert("BUY THESE JACKETS NOW!"),3000);  // used arrow function directly instead of declaring new function
setTimeout(message => window.alert("SALE ENDS SOON!"),6000);
setTimeout(message => window.alert("DO IT NOW!"),9000);

//also there is clearTimeout() function to clear the timeout


