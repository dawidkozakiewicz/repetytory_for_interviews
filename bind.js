// 1. Chciałem wywołać bind() na obiekcie, posiadającym metodę:

const someObj = {
    someStr: "",
    addChar(letter) {
        this.someStr += letter
    }
}

// someObj.addChar("Q") <----- tak bym musiał robić, gdybym nie użył bind()
// someObj.addChar("u") <-----         
// someObj.addChar("e") <-----
// someObj.addChar("e") <-----
// someObj.addChar("n") <-----

const addCh = someObj.addChar.bind(someObj) // tu wydobywam metodę z obiektu (someObj.addChar), potem przy pomocy bind(someObj) powiązuję ją
// z kontekstem tegoż obiektu (teraz już this === someObj). Od tej pory działam skrótowo:
addCh("Q")                                  // <---
addCh("u")                                  // <---
addCh("e")                                  // <---
addCh("e")                                  // <---
addCh("n")                                  // <---

console.log(someObj.someStr)

// 2. A tak rozumiem Twój przykład z fiszki:

const numbers = [1, 2];
const addFn = numbers.push.bind(numbers); // pobieramy z tablicy "numbers" jej natywną metodę (natywną dla wszystkich tablic) jaką jest push(). 
// Następnie wykonujemy na niej funkcję bind(numbers) i jako argument wstawiamy ją samą (tablicę).
// Dzięki temu pushowanie odbywało się będzie właśnie na niej bo od tej pory this === numbers:
addFn(3);
addFn(4)

console.log(numbers); // [1, 2, 3, 4]



