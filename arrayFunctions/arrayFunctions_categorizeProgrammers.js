// Ejercicio Categorizar programadores
// Se quiere categorizar un listado de programadores entre Juniors y Seniors basándonos en su experiencia como programador (meses) y la cantidad de lenguajes que domina.

// Se puede calificar de programador Seniors aquel que ha trabajado 24 meses o más y domina más de 2 lenguajes de programación.

// Por ejemplo: un programador con 21 meses de experiencia y que domina 4 lenguajes se representa con el array [21,4] y es Junior porque le faltan 3 meses de experiencia.

// Crea una función llamada categorizeProgrammers que recibe como argumentos un número indeterminado arrays de 2 elementos (que representan a un programador). El programa devolverá un array con los strings "Junior" o "Senior" indicando la categoría del programador de esa posición.

// Por ejemplo:

// categorizeProgrammers([10,1], [21,4],[42,3],[24,4],[30,2],[24,3]) Devolverá: ["Junior","Junior","Senior","Senior","Junior","Senior"]

function categorizeProgrammers(...programmers) {
    return programmers.map(programmer => (programmer[0] >= 24 && programmer[1] >= 2) ? "Senior" : "Junior");
}

console.log(categorizeProgrammers([10,1], [21,4],[42,3],[24,4],[30,2],[24,3]));