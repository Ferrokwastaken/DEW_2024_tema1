const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

console.log(mySet.has(3));

console.log("Eliminando el 4: " + mySet.delete(4));
console.log(mySet);

const setArray = [...mySet];

console.log(setArray);

const otherSet = new Set([4, 5, 6, 7]);

const unionSet = new Set([...mySet, ...otherSet]);
console.log(unionSet);

const intersectionSet = new Set([...mySet].filter(element => otherSet.has(element)));
console.log(intersectionSet);

const differenceSet = new Set([...mySet].filter(element => !otherSet.has(element)));
console.log(differenceSet);