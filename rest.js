const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0); // zero jest tu parametrem początkowym, args to spakowane do tablicy argumenty
};
console.log(sum(1, 2, 3)); // 6 - zostaje wyeliminowana potrzeba stworzenia tablicy

// Identycznie jak spread syntax wygląda rest parameter, różnicą jest miejsce użycia - w tym przypadku jako parametr funkcji.
// Zapis ten umożliwia zbieranie w jedną zmienną (będącą tablicą) wielu parametrów przekazywanych do funkcji:

function myF(...param) {
    console.log(param); //[1, 2, 3, 4, 5]
}

myF(1, 2, 3, 4, 5);

function myF2(...param) {
    const newTab = [...param];
    newTab.push("Ala");
    console.log(param, newTab); //[1,2,3], [1,2,3,"Ala"]
}

myF2(1, 2, 3);

// Rest operator możemy też wykorzystywać do pobierania w formie tablicy "pozostałych" wartości:

function printAbout(name = "Ala", ...other) {
    console.log("To jest " + name);

    if (other.length) {
        console.log(`${name} ma zwierzaki: ${other.join()}`);
    }
}

printAbout("Marcin", "pies", "kot"); //To jest Marcin. Marcin ma zwierzaki: pies,kot
printAbout(); //To jest Ala

// Pamiętaj, że rest musi występować jako ostatni w parametrach:

function myF3(a, b, ...numbers) {

}


// function myF(a, ...numbers, b) { 

// }
// błąd : Rest parameter must be last formal parameter



































































