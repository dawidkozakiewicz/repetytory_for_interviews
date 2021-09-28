// Spread syntax, to nowy zapis, który umożliwia rozbijanie iterowanej wartości na składowe.
// Może nią być string (bo składa się z poszczególnych liter), może to być tablica (bo składa się z elementów),
// mogą to być kolekcje (po których bardzo często robiliśmy pętle for)
// czy nawet obiekty (po których robiliśmy pętle for in), a nawet pojedyncze obiekty.

//rozbijanie tablicy na poszczególne liczby
const tab = [1, 2, 3, 4];
console.log(...tab); //1, 2, 3, 4

//kopiowanie tablicy
const tab2 = [...tab];
console.log(tab2)

//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5, 6]; //[1, 2, 3, 4, 5, 6]
console.log(tabFull)

//rozdzielanie tekstu na poszczególne litery
const str = "Ala ma kota";
const tab3 = [...str]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]
console.log(tab3)

//rozdzielanie tekstu na poszczególne litery
const str2 = "Ala ma kota";
const tab4 = [...str2]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]
console.log(tab4)

// Spread mogę też wykorzystać do zamiany kolekcji elementów na tablicę, dzięki czemu mogę używać dla nich metod tablicowych:

// const divs = document.querySelectorAll("div");

//nowa tablica z samymi tekstami z divów

// const texts = [...divs].map(el => el.innerText);


// W nowej wersji JavaScript spread możemy też zastosować dla obiektów:

const ob1 = {
    a: 10,
    b: 20
}

const ob2 = {
    a: 15,
    c: 30
}

const obBig = {
    ...ob1,
    ...ob2,
    d: 40
};

console.log(obBig); //{ a : 15, b : 20, c : 30, d : 40 }



