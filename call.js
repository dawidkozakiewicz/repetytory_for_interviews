// Dzięki call() obiekt może używać metody należącej do innego obiektu.

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person1));

//   Metoda call() może przyjmować argumenty:

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person3.fullName.call(person4, "Oslo", "Norway"));
