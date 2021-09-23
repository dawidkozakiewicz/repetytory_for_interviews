// Hoisting jest domyślnym zachowaniem JavaScript polegającym na przenoszeniu deklaracji na górę.
// W JavaScript zmienną można zadeklarować po jej użyciu. Innymi słowy; zmienna może być używana przed jej zadeklarowaniem.

x = 5 // przypisanie czyli użycie przed deklaracją
console.log(x) //gdyby przypisania poowyzej nie było, i tak nastąpiłaby inicjalizacja i w konsoli pokazałoby "undefined"
var x // deklaracja - z let i const tak się nie da, wyrzuci błąd, że "brak dostępu do x przed inicjalizacją" (nie ma znaczenia, czy z przypisaniem do x wartości, czy nie)

//

var xx
console.log(xx) // pokaże undefined, błędu nie wyrzuci, ponieważ deklaracja jest powyżej (bez względu na to, czy użyliśmy var, czy let)
xx = "qwerty"

// Zmienne zdefiniowane za pomocą let i const są podnoszone na górę bloku, ale nie są inicjowane. 
// Znaczenie: Blok kodu rozpoznaje zmienną, ale nie może być użyty, dopóki nie zostanie zadeklarowany. 
// Użycie zmiennej let przed jej zadeklarowaniem spowoduje wystąpienie błędu ReferenceError. 
// Zmienna znajduje się w „czasowej martwej strefie” od początku bloku do momentu jej zadeklarowania:

try {
    xxx = "Volvo"
    console.log(xxx)
    let xxx;
} catch (err) {
    console.log(err)
}

console.log('qwertyuiop')