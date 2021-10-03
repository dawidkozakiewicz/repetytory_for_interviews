// Za pomocą metody apply() można napisać metodę, której można używać na różnych obiektach.

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
console.log(person.fullName.apply(person1));

// Różnica między call() i apply():
// Różnica polega na tym, że Metoda call() pobiera argumenty oddzielnie. Metoda apply() przyjmuje argumenty jako tablicę.

const person2 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person3 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person2.fullName.apply(person3, ["Oslo", "Norway"]));