function CreateObj(name, age) {
    this.name = name,
        this.age = age
}





function CreateObj2(speed) {
    this.speed = speed

}
CreateObj.prototype = Object.create(CreateObj2.prototype)
CreateObj.prototype.constructor = CreateObj

CreateObj.prototype.show = function () {
    console.log(this.name)
}

const me = new CreateObj("Dawid", 42)
console.log(me)
me.show()

const he = new CreateObj2(220)
console.log(he)
