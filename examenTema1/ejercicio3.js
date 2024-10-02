//Israel Duque 2º DAW, Desarrollo en entorno cliente(DEW)
function wordsWithDeterminedLongitude(text, ...numbersList) {
    let separator = text.split(' ');
    let saveWords = [];

    for (let i = 0; i < separator.length; i++) {
        for (let j = 0; j < numbersList.length; j++) {
            if (separator[i].length == numbersList[j]) {
                saveWords.push(separator[i]);
            }
        }
    }

    return saveWords;
}

console.log(wordsWithDeterminedLongitude('Primero resuelve el problema', 8));
console.log(wordsWithDeterminedLongitude('Siempre escribe tu código como si la persona peligroso psicópata', 9));
console.log(wordsWithDeterminedLongitude('Para entender las recursividad hay que entender lo que es la recursividad', 4, 3, 8));
console.log(wordsWithDeterminedLongitude('Es más difícil leer código que escribirlo'));