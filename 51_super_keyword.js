// super = refers to the parent class

class Animal{
    constructor(name){
        this.name = name;
    }
}

class Rabbit extends Animal{
    constructor(name,runSpeed){
        super(name); //calls the constructor of the parent class
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name,swimSpeed){
        super(name); //calls the constructor of the parent class
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name,flySpeed){
        super(name); //calls the constructor of the parent class
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 20);
const fish = new Fish("fish", 10);
const hawk = new Hawk("hawk", 50);

console.log(rabbit.name); //displays rabbit
console.log(rabbit.runSpeed); //displays 20
console.log(fish.name); //displays fish
console.log(fish.swimSpeed);
console.log(hawk.name); //displays hawk
console.log(hawk.flySpeed); //displays 50

