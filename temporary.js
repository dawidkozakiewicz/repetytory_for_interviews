function Enemy(speed, power) {
    this.live = 3;
    this.speed = speed;
    this.power = power;

    this.print = function () {
        console.log(`
            Przeciwnik ma:
            życia: ${this.live}
            szybkości: ${this.speed}
            siły ataku: ${this.power}
        `);
    }
}

console.dir(Enemy);