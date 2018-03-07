
function Enemy(gameEngine, x, y) {
    this.gameEngine = gameEngine;
    this.x = x;
    this.y = y;

    this.isAlive = true;

    this.isDecidingLane = true;
    this.isWaiting = false;
    this.waitTime = null;
    this.waitLeft = 0;
    this.isMovingToLane = false;
    this.isMovingDownLane = false;

    this.hasEnteredSafeZone = false;
    this.chosenLane = 0;
    this.movingSpeed = 0;
    this.hp = 3;
    this.lanes = null;
    this.radius = 2;
    Entity.call(this, game, x, y);

}

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Gun;

Enemy.prototype.update = function () {
    if (this.isAlive) {
        if (isDecidingLane) {
            this.chosenLane = Math.floor((Math.random() * 5) + 1); //5 lanes
            this.isDecidingLane = false;
            this.isMovingToLane = true;
        }
        if (this.isMovingToLane) {
            this.x
        }
        if (this.isWaiting) {
            if (!this.waitTime) {
                
            }
        }
    
        if (isMovingDownLane) {
    
        }

    }



}

Enemy.prototype.draw = function () {
    
    Entity.prototype.draw.call(this)
}

Enemy.prototype.update = function () {
}

Enemy.prototype.remove = function () {

}