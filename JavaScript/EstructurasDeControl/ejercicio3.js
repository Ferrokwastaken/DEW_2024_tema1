let numberOne = parseInt(prompt("Introduzca un número"));
let numberTwo = parseInt(prompt("Introduzca otro número"));
let numberThree = parseInt(prompt("Introduzca el último número"));

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne + " es el mayor");
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo + " es el mayor");
} else {
    console.log(numberThree + " es el mayor");
}