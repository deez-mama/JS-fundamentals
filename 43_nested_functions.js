//nested function -> function within a function
// used in closures (future topic)

let UserName = "John";
let userInbox = 0;

function login(){
    displayUserName();
    displayUserInbox();
    
    function displayUserName(){
        console.log (`Welcome ${UserName}`);
    }

    function displayUserInbox(){
        console.log (`You have ${userInbox} new messages`);
    }
}
