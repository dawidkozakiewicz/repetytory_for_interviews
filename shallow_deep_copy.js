// Metodami (spread i assign) możemy skopiować tylko płaskie obiekty. 
// Jeżeli któraś z właściwości wskazuje na inny obiekt,
// zostanie skopiowana tylko referencja do tego obiektu:

const food = { type : "rybki" }

const a = {
    name : "kot",
    food : food
}

const b = { ...a }
b.food.type = "chrupki"; //nadpisało w obydwu obiektach (a i b) zamiast w jednym

console.log(a)
console.log(b)

console.log(b.food, a.food); //{type : "chrupki"}, {type : "chrupki"}

// assign

const aa = {
    name : "kot",
    age: 7,
    speed: 10
}

const bb = {
    name : "pies",
    age : 5
}

const c = Object.assign({}, aa, bb);

console.log(c); //{name : "pies", age: 5, speed: 10}

// głęboka kopia

// Żeby sklonować obiekt głęboko, musimy zastosować inne techniki - np. skorzystać z obiektu JSON

const ob = {
    name : "Marcin",
    pet : {
        name : "Feliks",
        kind : "cat"
    }
}

const ob2 = JSON.parse(JSON.stringify(ob));

ob2.pet.name = "Super Szamson";
ob2.pet.kind = "pies";

console.log(ob.pet.name, ob2.pet.name); //Feliks, Super Szamson
console.log(ob.pet.kind, ob2.pet.kind); //cat, pies