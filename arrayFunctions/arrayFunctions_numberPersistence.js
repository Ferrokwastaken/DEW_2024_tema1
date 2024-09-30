// Ejercicio Persistencia de un número
// La persistencia de un número consiste en averiguar cuantas veces puedes multiplicar sus dígitos hasta conseguir un único dígito.

// Por ejemplo:

//  persistence(39) es 3 // porque podemos ir multiplicando los dígitos 3 veces:

//  3*9 = 27
//  2*7 = 14, 
//  1*4= 4     // 4 ya sólo tiene un dígito.
// persistence(999) es 4 /

// 9*9*9 = 729, 
// 7*2*9 = 126,
// 1*2*6 = 12
// 1*2 = 2  // 2 ya sólo tiene un dígito
// persistence(8) es 0 // porque 8 ya es un dígito solo.

// Crea una función llamada persistence que recibe como argumento un número y devuelva la persistencia de dicho número.

// Por ejemplo:

// persistence(39). Devolverá: 3
// persistence(999). Devolverá: 4 
// persistence(4). Devolverá: 0

function persistence(num) {
    if (num < 10) return 0;
    return 1 + persistence(num.toString().split('').reduce((a,n) => a *= n));
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));