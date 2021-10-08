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

// *********************************************************** //

// 2. splice()

// Metoda splice() dodaje i/lub usuwa elementy tablicy.
// splice() nadpisuje oryginalną tablicę.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 1, "Lemon", "Kiwi"); // Na pozycji 2 dodaj nowe elementy i usuń 1 element
console.log(fruits3)


const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits4.splice(2, 2); // Na pozycji 2 usuń 2 eelmenty
console.log(fruits4)





