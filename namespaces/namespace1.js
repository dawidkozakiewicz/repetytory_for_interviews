let STEVE = {
    colorDiv: function (ev) {
        let target = ev.currentTarget;
        target.style.backgroundColor = 'purple';
        target.style.color = 'white';
    },
    init: function () {
        let divA = document.getElementById('output');
        divA.addEventListener('mouseout', this.colorDiv)
    }
}

STEVE.init();