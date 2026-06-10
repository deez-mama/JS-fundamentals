/* promise-> 
        Its an object that encapsulates the result of an asynchronous function
        It is used as a "I promise I'll return something in the future"
        
        Promises have 3 STATES
        'Pending', 'Fulfilled' or 'Reject'. The result is what can be returned

        It has 2 parts: producing and consuming
        If a promise is handles, what do we do? -> This part is handled by consuming part 
*/

//producing part 
const promise = new Promise((resolve, reject)=>{

    let fileLoaded = true;

    fileLoaded ? resolve("File has loaded") : reject("File is NOT loaded");
});

//consuming part

promise.then((value)=> console.log(value))
        .catch((error)=> console.log(error));

