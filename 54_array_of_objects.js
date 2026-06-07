class Car{


    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }

    drive(){
        console.log(`You are driving ${this.model}`);
    }

}

const car1 = new Car("Mustang", 2023, blue);
const car2 = new Car("Corvette", 2022, white);
const car3 = new Car("Lambo", 2025, yellow);

const cars = [car1,car2,car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();


