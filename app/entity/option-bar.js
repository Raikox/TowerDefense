class OptionBar {

    constructor(canvasContext, width, height) {
        this._width = width;
        this._height = height;
        this._canvasContext = canvasContext;
    }

    draw = () => {
        this._canvasContext.fillStyle = "blue";
        this._canvasContext.fillRect(0,0,this._width, this._height);
    }

    drawStatus = () => {
        this._canvasContext.fillStyle = "gold";
        this._canvasContext.font = "18px Roboto";
        this._canvasContext.fillText("Resources",20,25);
        this._canvasContext.fillText(resourcesNumber,45,45);


    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

}