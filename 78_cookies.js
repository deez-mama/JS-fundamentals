// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name-value pair

//Creating cookies manually: 

console.log(navigator.cookieEnabled); //to check is cookie is enabled or not

document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; 
document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

console.log(document.cookie);

setCookie("email", "sampleEmail@gmail.com", 365);
deleteCookie("lastName");


console.log(getCookie("firstName"));
console.log(getCookie("email"));
console.log(getCookie("firstName"));


function setCookie(name, value, daystoLive){ //days to live is in days
    const date = new Date();
    date.setTime(date.getTime() + daystoLive * 24 * 60 * 60 *1000) //in milliseconds
    let expires = "expires=" + date.toUTCString(); 
    document.cookie = `${name}=${value}; ${expires}; path= /`
}

function deleteCookie(name){
    setCookie(name, "", -1);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}