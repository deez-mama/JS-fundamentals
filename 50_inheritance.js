//inheritance -> a child class can inherit all the methods and properties of a parent class

class Animal{
    alive = true;
    
    eat(){
    console.log(`The ${this.name} is eating`);   
    }
    
    sleep(){
        console.log(`The ${this.name} is sleeping`); 
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`The ${this.name} is running`); 
    }   
}

class Fish extends Animal{
    
    name = "fish";
    
    swim(){
        console.log(`The ${this.name} is swimming`); 
    }   
}

class Hawk extends Animal{ 
    
    name = "hawk";
    
    fly(){
        console.log(`The ${this.name} is flying`); 
    }   
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive); //displays true
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(fish.alive); //displays true
fish.eat();
fish.sleep();
fish.swim();
console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly(); 