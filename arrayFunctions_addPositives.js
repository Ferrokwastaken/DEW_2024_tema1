// Crea una función llamada sumPositives que recibe como argumento un número indeterminado de números y 
//devuelve un número con la suma de todos los que son positivos. Es decir, los negativos los ignora.

// Por ejemplo, con la entrada sumPositives(1,-2,-3,4)

// Devolverá 5

function sumPositives(...numbersList) {
    let addedPositiveNumbers = 0;

    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] > 0) {
            addedPositiveNumbers += numbersList[i];
        }
    }

    return addedPositiveNumbers;
}

// function sumPositives2(...list) {
//     return list.filter(n => n >= 0).reduce((a,n) => a += n);
// }

// console.log(sumPositives2(1, -2, -3, 4));
console.log(sumPositives(1, -2, -3, 4));