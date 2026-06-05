//this = reference to a particular object
//       the object depends on the immmediate context

const car1 = {
    model: "Mustang", //model is a property of the car object
    color: "red", //color is a property of the car object
    year: 2023, //year is a property of the car object

    drive : function(){ //drive is a method of the car object
        console.log(`You drive the ${this.model}`); //We HAVE to use this keyword 
    },

}

const car2 = {
    model: "Corvette", //model is a property of the car object
    color: "blue", //color is a property of the car object
    year: 2023, //year is a property of the car object

    drive : function(){ //drive is a method of the car object
        console.log(`You drive the ${this.model}`); 
    },

}