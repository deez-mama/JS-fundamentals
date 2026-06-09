// console.time() = starts a timer to count how long an operation takes
//                  Give each timer a unique name


//start
console.time("Response Time"); // Here the name is Response Time


alert("CLICK THE OKAY BUTTON!");


//If there was an asynchronous code here, the count would already stop before this can finish

console.timeEnd("Response Time")
//end

//Tells how much time it took to complete the block of code within the start and end comments

//Note: It only counts how long a synchronous operation takes