const a = {
    name : "kot",
    age: 7,
    speed: 10
}

const b = {
    name : "pies",
    age : 5
}

const c = Object.assign({q: 'qwerty'}, a, b);

console.log(c); //{name : "pies", age: 5, speed: 10}
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); //{ a: 1, b: 2, c: 3 }