// Map -> holds key value pair of any datatype

const store = new Map([

    ["jeans", 500],
    ["shirt", 300],
    ["shoes", 800]
    
]);
store.forEach((value,key) => console.log(`${key} $${value}`));



let cart=0;

cart+=store.get("jeans"); // 500
console.log(cart);
cart+=store.get("shirt"); // 300
console.log(cart);
cart+=store.get("shoes");
store.set("hat", 200);
store.delete("hat");
console.log(cart);

//store.has("hat") -> false //returns a boolena value if the key exists in the map or not.

//store.size -> returns the number of key value pairs in the map. In this case, 3



