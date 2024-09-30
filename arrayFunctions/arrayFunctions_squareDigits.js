// Crea una función llamada squareDigits que recibe como argumento un número y 
//devuelve un número que se forma al unir todos los cuadrados de cada dígito.

// Por ejemplo:

// squareDigits(213) Debe hacer los cuadrados de cada dígito: 2^2=4, 1^2=1, 3^2=9. Devolverá: 419
// squareDigits(90345) Debe hacer los cuadrados de cada dígito: 9^2=81, 0^2=0, 3^2=9, 4^2=16, 5^2=25. Devolverá: 81091625

// function squareDigits(num) {
//     let turnToString = num.toString();
//     let addedSquared = turnToString.split('');

//     for (let i = 0; i < addedSquared.length; i++) {
        
//     }

//     return addedSquared;
// }

function squareDigits(num) {
    let numberString = num.toString();
    let numbersArray = numberString.split('');
    return numbersArray.reduce((a,n) => a += n**2, "");
}

console.log(squareDigits(213));
console.log(squareDigits(90345));