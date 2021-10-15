let person = {
    name: "Dawid",
    age: 42,
    gender: "male"
}

// Po użyciu console.dir na tym obiekcie osoby widzimy, że ma on właściwość __proto__. 
// Właściwość __proto__ jest domyślną właściwością dodawaną do każdego obiektu. 
// Ta właściwość wskazuje na prototyp obiektu. 
// Domyślnym prototypem każdego obiektu jest Object.prototype. 
// Dlatego właściwość __proto__ obiektu person wskazuje na Object.prototype.

console.dir(person.__proto__)
console.log(person.__proto__ === Object.prototype) // true

let teacher = {
    name: "Eustachy",
    age: 100,
    gender: "male",
    subject: "Geography"
}

console.log(teacher.__proto__ === Object.prototype) // true

