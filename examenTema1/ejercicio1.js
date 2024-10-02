//Israel Duque 2º DAW, Desarrollo en entorno cliente(DEW)
function fromFahrenheitToCelsius(... fahrenheitNumbers) {
    let changeTemperature = 0;
    let celsiusArray = [];

    for (let i = 0; i < fahrenheitNumbers.length; i++) {
        changeTemperature = (fahrenheitNumbers[i] - 32) * 5/9;
        celsiusArray.push(changeTemperature);
    }
    return celsiusArray;
}

console.log(fromFahrenheitToCelsius(68, 50, 46.4, 39, 90));
console.log(fromFahrenheitToCelsius(20, 0, -10));
console.log(fromFahrenheitToCelsius());