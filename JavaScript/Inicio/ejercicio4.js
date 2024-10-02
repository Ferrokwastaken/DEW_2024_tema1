let number = parseInt(prompt("Dividendo:"));
let anotherNumber = parseInt(prompt("Divisor"));
let result = number % anotherNumber;

document.getElementById("dividendo").textContent = number;
document.getElementById("divisor").textContent = anotherNumber;
document.getElementById("resto").textContent = result;