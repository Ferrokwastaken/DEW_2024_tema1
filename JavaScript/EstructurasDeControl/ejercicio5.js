let grade = parseInt(prompt("Introduzca una nota"));

if (grade < 3) {
    console.log("Muy deficiente");
} else if (grade >= 3 && grade < 5) {
    console.log("Insuficiente");
} else if (grade == 5) {
    console.log("Suficiente");
} else if (grade == 6) {
    console.log("Bien");
} else if (grade > 6 && grade < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}