class Animal {
    name;
    speed = 0;
    #alive = true;

    constructor(name) {
        this.name = name;
    }

    isAlive() {
        return this.#alive;
    }

    toString() {
        let state = this.#alive ? "vivo" : "muerto";
        return this.name + " está " + state + " y es un animal";
    }

    move() {
        return "No sé cómo";
    }

    cutTheNeck() {
        this.#alive = false;
    }
}

class Terrestrial extends Animal {
    #site = "land";

    run() {
        console.log("Está corriendo");
    }

    move() {
        return "Está corriendo";
    }

    get realSpeed() {
        if (this.site == "land") {
            return this.speed;
        } else if (this.site == "water") {
            return this.speed / 4;
        } else {
            return 0;
        }
    }

    get site() {
        return this.#site;
    }

    set site(newSite) {
        if (['land', 'water'].includes(newSite)) {
            this.#site = newSite;
        }
    }
}

class Aquatic extends Animal {
    site = "water";

    swim() {
        console.log("Está nadando");
    }

    move() {
        return "Está nadando";
    }

    dive() {
        return "Estoy buceando";
    }

    cutTheNeck () {};
}

const animal1 = new Animal("Pepe");
console.log(animal1);
console.log(animal1.isAlive());
// console.log(animal1.toString());

const chicken = new Terrestrial("Little");
chicken.speed = 14;
// console.log(chicken.toString());

const shark = new Aquatic("Eduardo");
shark.speed = 19;
// console.log(shark.toString());

let jungle = [animal1, chicken, shark];
jungle.forEach(animal => console.log(animal.name, animal.move()));

jungle.filter(animal => animal instanceof Aquatic).forEach(animal => console.log(animal.name, animal.dive()));

console.log("----Animales que están vivos----");
console.log(jungle.filter(animal => animal.isAlive()));

console.log("----RIP gallina----");
chicken.cutTheNeck();
console.log(jungle.filter(animal => animal.isAlive()));

console.log("---RIP tiburón----");
shark.cutTheNeck();
console.log(jungle.filter(animal => animal.isAlive()));

console.log(chicken.site, chicken.realSpeed);
chicken.site = "water";
chicken.site = "air";
console.log(chicken.site, chicken.realSpeed);