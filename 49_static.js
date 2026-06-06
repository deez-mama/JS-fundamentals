// static = belongs to class not the object
//         properties : useful for caches and fixed-configuration
//         methods : useful for utility functions

// We see static in Math class. Say we want to round something
// We do Math.round()
// We don't do const math1 = new Math() and then math1.round()
// This is because round is a static member of the Math class.
// It belongs to the class itself, not indicidual instances / objhects of the class

class Car {

    static numberofCars = 0;
    constructor(model){
        this.model = model;
        this.numberofCars+=1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");

console.log(Car.numberofCars); //displays 2
Car.startRace(); //displays 3...2...1...GO!
