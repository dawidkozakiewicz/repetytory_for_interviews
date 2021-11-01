let TONY = {
    colorDiv: function (ev) {
        let target = ev.currentTarget;
        target.style.backgroundColor = 'olive';
        target.style.color = '#333';
    },
    init: function () {
        let divA = document.getElementById('output');
        divA.addEventListener('mouseover', this.colorDiv)
    }
}

TONY.init();



