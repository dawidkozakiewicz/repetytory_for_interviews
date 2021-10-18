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
    console.log(`Tworzę przeciwnika: ${this.x}x${this.y}`);

}

EnemyShoot.prototype = Object.create(Enemy.prototype);

EnemyShoot.prototype.shoot = function () {
    return this.name + " strzelam";
}


const enemyN = new Enemy("Normalny", 10, 15);
console.log(enemyN.fly()); //Normalny latam
// console.log(enemyN.shoot()); błąd - nie ma takiej metody

const enemyS = new EnemyShoot("Shooter", 10, 20);
console.log(enemyS.fly()); //Shooter latam
console.log(enemyS.shoot()); //Shooter strzelam