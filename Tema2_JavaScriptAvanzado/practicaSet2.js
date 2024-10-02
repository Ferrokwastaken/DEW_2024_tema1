function randomArray(min, max, num) {
    if (min < max && num <= max - min) {
        const numbers = new Set();
        while (numbers.size < num) {
            let random = Math.floor(Math.random() * (max - min + 1) + min);
            numbers.add(random);
        }
        return [...numbers];
    }
    return null;
}

console.log(randomArray(3, 7, 4));