const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

console.log(add());
console.log(add());
console.log(add());

// ***************************************** //

const outerF = () => {
    let counter = 0
    return () => {
        counter += 1
        return counter
    }
}


const innerF = outerF()

console.log(innerF())
console.log(innerF())
console.log(innerF())


// Zmienna add jest przypisana do wartości zwracanej przez funkcję samowywołującą. 
// Funkcja samowywoływana uruchamia się tylko raz. Ustawia licznik na zero (0) i zwraca wyrażenie funkcji. 
// W ten sposób add staje się funkcją. „Cudowną” częścią jest to, 
// że może uzyskać dostęp do licznika w zakresie nadrzędnym. 
// Nazywa się to zamknięciem JavaScript. Dzięki temu funkcja może mieć zmienne „prywatne”. 
// Licznik jest chroniony przez zakres funkcji anonimowej i można go zmienić tylko za pomocą funkcji add.
// Zamknięcie to funkcja mająca dostęp do zakresu nadrzędnego, nawet po zamknięciu funkcji nadrzędnej.