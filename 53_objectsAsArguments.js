class Car{


    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }

}

const car1 = new Car("Mustang", 2023, blue);
const car2 = new Car("Corvette", 2022, white);
const car3 = new Car("Lambo", 2025, yellow);

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

changeColor(car3,"gold");

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}


function changeColor(car, color){
    car.color = color;
}