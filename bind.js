function testX() {
    console.log(this); //window
}
testX();

const ob = {
    name: "pies",

    show() {
        console.log(this); //ob

        //poniższa funkcja NIE JEST metodą obiektu ob
        //ani metodą poniższego obiektu obj
        function testY() {
            console.log(this); //window
        }
        testY();

        const obj = {
            show() {
                console.log(this); //obj
            }
        }
        obj.show();
    }
}

ob.show();
