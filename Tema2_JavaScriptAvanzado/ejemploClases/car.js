class Car {
    registration;
    make;
    model;
    #year;
    owner = null;

    constructor(registration, make, model="", year=2020) {
        this.registration = registration;
        this.make = make;
        this.model = model;
        this.#year = year;
    }

    getMakeModel() {
        return this.make + " " +  this.model;
    }

    getYear() {
        return this.#year;
    }

    setYear(year) {
        if (year < this.#year) {
            this.#year = year;
        }
    }

    getOwnerName() {
        if (this.owner) {
            return this.owner.name;
        }
        return undefined;
    }
}

class Person {
    #dni = "Sin definir";
    name;

    constructor(name, dni) {
        this.name = name;
        this.setDni(dni);
    }

    setDni(dni = "") {
        if (dni.length == 8) {
            this.#dni = dni;
        }
    }

    getDni() {
        return this.#dni;
    }
}

const car1 = new Car("1234-ABC", "Honda");
car1.model = "Civic";
const car2 = new Car("5678-DEF", "Dacia", "Sandero", 2016);

console.log(car1);
console.log(car2.getMakeModel());
car2.setYear(2002);
console.log(car2.getYear());

const person1 = new Person("José Luis", "12345678");
console.log(person1);
console.log(person1.getDni());

car1.owner = person1;
console.log(car1);
console.log(car1.registration);
console.log(person1.name);
console.log(car1.owner.name);
console.log(car2.owner);
console.log(car1.getOwnerName());
console.log(car2.getOwnerName());