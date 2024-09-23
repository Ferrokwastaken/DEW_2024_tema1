// Ejercicio Sumar Números
// Crea una función llamada sumNumbers que recibe como argumento un número indeterminado de números y 
//devuelve un número con la suma de todos ellos.

// Por ejemplo, con la entrada sumNumbers(1,2,3,4)

// Devolverá 10

function sumNumbers(...numbersList) {
    let result = 0;

    for (let i = 0; i < numbersList.length; i++) {
        result += numbersList[i];
    }

    return result;
}

// function sumNumbers2(...list) {
//     return list.reduce((a,n) => a += n);
// }

// console.log(sumNumbers2(1, 2, 3, 4));
console.log(sumNumbers(1, 2, 3, 4));