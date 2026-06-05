//object = A group of properties and methods
//            properties = what an object has
//            methods = what an object can do
//            use . to access properties and methods

const car1 = {
    model: "Mustang", //model is a property of the car object
    color: "red", //color is a property of the car object
    year: 2023, //year is a property of the car object

    drive : function(){ //drive is a method of the car object
        console.log("You drive the car");
    },

    brake : function(){ //brake is a method of the car object
        console.log("You step on the brakes");
    }
}

const car2 = {
    model: "Corvette", //model is a property of the car object
    color: "blue", //color is a property of the car object
    year: 2023, //year is a property of the car object

    drive : function(){ //drive is a method of the car object
        console.log("You drive the car");
    },

    brake : function(){ //brake is a method of the car object
        console.log("You step on the brakes");
    }
}


console.log(car1.model); //displays Mustang
console.log(car1.color); //displays red
console.log(car2.year); //displays 2023
car2.drive(); //displays You drive the car   
car2.brake(); //displays You step on the brakes

