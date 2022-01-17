const food = { type : "rybki" }

const a = {
    name : "kot",
    food : food
}

const b = { ...a }
b.food.type = "chrupki";

console.log(b)

console.log(b.food, a.food); //{type : "chrupki"}, {type : "chrupki"}