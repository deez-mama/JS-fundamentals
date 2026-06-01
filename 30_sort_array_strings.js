let fruits = ["apple","banana","orange","mango"];

for (let fruit of fruits){ //original string
    console.log(fruit);
}

fruits=fruits.sort(); // sorted string

for (let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse(); //reversed sorted string

for (let fruit of fruits){
    console.log(fruit);
}

