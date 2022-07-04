class Enemy {
    constructor(canvasContext, x, verticalPosition, cellSize) {
        this._canvasContext = canvasContext;
        this._x = x;
        this._y = verticalPosition;
        this._width = cellSize;
        this._height = cellSize;
        this._speed = Math.random() * 0.2 + 0.4;
        this._movement = this._speed;
        this._hp = 100;
        this._maxHealt = this._hp;
    }

    update = () => {
        this._x -= this._movement;
    }

    draw = () => {
        this._canvasContext.fillStyle = "#b85450";
        this._canvasContext.fillRect(this._x, this._y, this._width, this._height);
        this._canvasContext.fillStyle = "#393E51";
        this._canvasContext.font = "18px Roboto";
        this._canvasContext.fillText(Math.floor(this._hp), this._x + 2, this._y + 18);
    }

}