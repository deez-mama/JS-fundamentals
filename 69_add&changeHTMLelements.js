//We can add element through document.create();
//We can change element content by two ways:

//.innerHTMl (vulnerable to XSS attacks)
//.textContent (more secure)

const nameTag = document.createElement("h2");
// nameTag.innerHTML="John";

nameTag.textContent="John"; //just swap innerHTMl with textContent

document.body.append(nameTag);

const myList = document.querySelector("#desert");
const listItem = document.createElement("li");
listItem.textContent= "choco-lava" ;
//myList.append(listItem); //adds element at the end of the list
//myList.prepend(listItem); //adds elements infront

myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
//would insert at index 1, pushing other elements below
