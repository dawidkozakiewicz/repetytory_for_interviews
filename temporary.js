function Enemy(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    console.log(`Tworzę przeciwnika: ${this.x}x${this.y}`);
}

Enemy.prototype.fly = function () {
    return this.name + " lecę";
}

function EnemyShoot(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.type = "shooter";
}

EnemyShoot.prototype.shoot = function () {
    return this.name + " strzelam";
}

const enemyS = new EnemyShoot("Shooter", 20, 20);
console.log(enemyS.shoot()); //Shooter strzelam
console.log(enemyS.__prototype__)