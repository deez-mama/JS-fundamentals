// synchronous code = ordered sequence of code
//                    step by step linea instructions
//                    start now, finish later

//asynchronous code = out of sequence
//                    i.e start now, finish some time later
//                    Example: API calls (do this while other process run )
//                    basically : start now, finish some time later


console.log("START");
console.log("This step is synchronous");

setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("END");