const car = {
    registration: "123-ABCD",
    make: "Dacia",
    model: "Sandero",
    year: 2020,
    toString: function() {
        return `(${this.registration} - ${this.make} - ${this.model} - ${this.year})`;
    }
};

function getMakeModel(carObject) {
    return carObject.make + " " +  carObject.model;
}

function thisYearHasITV(carObject) {
    let yearLife = (new Date()).getFullYear() - carObject.year;

    if (yearLife < 4) {
        return false;
    } if (yearLife > 10) {
        return true;
    }
    return yearLife % 2 == 0;
}

//let car2 = car; Asignación

// let car2 = {};
// Object.assign(car2, car); Con Object.assign

let car2 = {...car}; //spread...
let car3 = {...car,
    make: "Seat",
    model: "Panda"
};
// let carString = JSON.stringify(car);
// let car2 = JSON.parse(carString); JSON.parse

// let car2 = structuredClone(car); structuredClone
car2.make = "Ferrari";
car2.model = "Laferrari";


console.log(getMakeModel(car));
console.log(thisYearHasITV(car));
console.log("car: " + car.toString());
console.log("car2: " + car2.toString());
console.log("car3: " + car3.toString());

let garage = [car, car2, car3];
car2.registration = "345-DBFA";
car2.year = 2016;
car3.registration = "657-TGOW";
car3.year = 2010;

console.log(garage);
console.log("Coches Seat: ", garage.filter(c => c.make == 'Seat').map(c => c.toString()));
console.log("Coches posteriores a 2010: ", garage.filter(c => c.year > 2010).map(c => c.toString()));
console.log("ITV: ", garage.some(c => thisYearHasITV(c)));