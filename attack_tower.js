
function Gun(gameEngine, x, y){
    this.gameEngine = gameEngine;
    this.x = x;
    this.y = y;
    this.shootSpeed = 0;
    this.currentAngle = 0;
    this.swivelSpeed = 0;
    this.swivelDirection = 0;
    Entity.call(this, game, x, y);
}

Gun.prototype = Object.create(Entity.prototype);

Gun.prototype.constructor = Gun;

Gun.prototype.update = function () {
}

Gun.prototype.update = function () {
}

Gun.prototype.draw = function () {
    Entity.prototype.draw.call(this)
}

Gun.prototype.update = function () {
}

Gun.prototype.remove = function () {

}