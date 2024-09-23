// Ejercicio Sumar Cubos
// Crea una función llamada sumCubes que recibe como argumento un número y 
//devuelve un número con la suma de todos cubos empezando por el 1 y acabando en ese número. 

// Por ejemplo:

// sumCubes(2) Debe hacer la suma de 1^3+2^3=9
// sumCubes(4) Debe hacer la suma de 1^3+2^3+3^3+4^3=100

function sumCubed(number) {
    let addedCubedNumbers = 0;

    for (let i = 1; i <= number; i++) {
        addedCubedNumbers += Math.pow(i, 3);
    }

    return addedCubedNumbers;
}

console.log(sumCubed(2));
console.log(sumCubed(4));