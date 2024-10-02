//Israel Duque 2º DAW, Desarrollo en entorno cliente(DEW)
function isZeroDegreesCelsius(... numbersList) {
    let booleanAux = false;

    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] < 0) {
            booleanAux = true;
        }
    }
    return booleanAux;
}

console.log(isZeroDegreesCelsius(22, 5, 13, 0, 35));
console.log(isZeroDegreesCelsius(15, 3, -4, 8, -2, 10, 14, 16));
console.log(isZeroDegreesCelsius());