// The date object is used to work with date and times

let date = new Date(2023, 0, 1, 2, 3, 4, 5); //year, month (0 means Jan , 1 means feb ..), day, hour, minute, second, millisecond

//let date = new date("January 1, 2023 00:00:00");

date = date.toLocaleString();
console.log(date);

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(11); //December
date.setDate(31);
date.setHours(23);
date.setMinutes(2);
date.setSeconds(10);
*/

document.getElementById("date").innerHTML = date;

function formatData(data){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours =date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    


    return `${hours}:${minutes}:${seconds}`
}