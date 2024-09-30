// Ejercicio Par/Impar
// Crea una función llamada evenOrOdd que recibe como argumento un array de números 
//y devuelve otro array de Strings con las palabras "Even" o "Odd" 
//indicando si el número de esa posición es par o impar.

// Por ejemplo, con la entrada [2, 5, 7, 0, 16]

// Devolverá ["Even", "Odd", "Odd", "Even", "Even"]

function evenOrOdd(numbersList) {
    let result = [];

    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] % 2 == 0) {
            result.push("Even");
        } else {
            result.push("Odd");
        }
    }
    return result;
}

// function evenOrOdd2(numbersList) {
//     return numbersList.map(n => n % 2 == 0 ? "Even" : "Odd")
// }

let numberArray = [2, 5, 7, 0, 16];
console.log(evenOrOdd(numberArray));