class Tower {
    constructor(canvasContext, x, y, cellSize) {
        this._canvasContext = canvasContext;
        this._x = x;
        this._y = y;
        this._width = cellSize;
        this._height = cellSize;
        this._shooting = false;
        this._hp = 100;
        this._projectiles = [];
        this._time = 0;
    }

    draw = () => {
        this._canvasContext.fillStyle = "#499c54";
        this._canvasContext.fillRect(this._x, this._y, this._width, this._height);
        this._canvasContext.fillStyle = "#393E51";
        this._canvasContext.font = "18px Roboto";
        this._canvasContext.fillText(Math.floor(this._hp), this._x + 2, this._y + 18);
    }
}