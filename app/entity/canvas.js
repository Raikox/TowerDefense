class Canvas {

    initCanvas = () => {
        this._canvasContext = this._canvas.getContext("2d");
        this._canvas.width = this._width;
        this._canvas.height = this._height;
    }

    constructor(canvas, width, height, cellSize) {
        this._canvas = canvas;
        this._width = width;
        this._height = height;
        this._cellSize = cellSize;
        this.initCanvas();
    }

    get canvas() {
        return this._canvas;
    }

    set canvas(value) {
        this._canvas = value;
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

    get canvasContext() {
        return this._canvasContext;
    }

    get cellSize() {
        return this._cellSize;
    }

    set cellSize(value) {
        this._cellSize = value;
    }
}