class CanvasCell {

    constructor(canvasContext, x, y, cellSize) {
        this._canvasContext = canvasContext;
        this._x = x;
        this._y = y;
        this._width = cellSize;
        this._height = cellSize;
    }

    draw = () => {
        if( mouse.x && mouse.y && this.collision(this,mouse) ){
            this._canvasContext.strokeStyle = "#e7e9eb";
            this._canvasContext.strokeRect(this._x, this._y, this._width, this._height);
        }
    }

    collision = (first, second) => {
        if(
            !(  first._x > second.x + second.width ||
                first._x + first._width < second.x ||
                first._y > second.y + second.height ||
                first._y + first._height < second.y
            )
        ){
            return true;
        }
    }

}