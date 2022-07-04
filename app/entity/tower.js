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

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get shooting() {
        return this._shooting;
    }

    set shooting(value) {
        this._shooting = value;
    }

    get hp() {
        return this._hp;
    }

    set hp(value) {
        this._hp = value;
    }

    get projectiles() {
        return this._projectiles;
    }

    set projectiles(value) {
        this._projectiles = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }
}