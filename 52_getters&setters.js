//getter -> reading a value

//get -> binds an object property to a function when accessed

//setter -> assigning a value

//set -> binds an object property to a function when that property is assigned value



class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
     get power(){
        return `${this._power} hp`;
    }

    get gas(){
        return `${this._gas} liters`;
    }

    set gas(value){
        value < 0 ? this._gas = 0 :
        value > 50 ? this._gas = 50 :
        this._gas = value;
    }
}

let car1 = new Car(100);
car1.gas=150;
console.log(car1.power);
console.log(car1.gas);