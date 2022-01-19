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