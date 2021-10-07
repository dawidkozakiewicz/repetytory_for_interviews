// 1. slice()


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)
console.log(fruits)

// Metoda slice() zwraca wybrane elementy w tablicy jako nową tablicę.
// slice() wybiera elementy zaczynające się od podanego argumentu początkowego
// i kończące się na podanym argumencie końcowym, ale go nie obejmuje.
// slice() nie zmienia oryginalnej tablicy.

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits2.slice(-3, -1);  // użycie liczb ujemnych liczy od końca tablicy
console.log(myBest)

