let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

function shuffle(array){
    
    let currentIndex = array.length;

console.log("Before shuffling: ");
console.log(cards);    

    while(currentIndex != 0){

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        }

    }
    
console.log("After shuffling: ");
console.log(cards);