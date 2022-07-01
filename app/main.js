//variables
const gameGrid = [];
const cellSize = 30;
let resourcesNumber = 300;
const towers = [];
const mouse = {
    x: 10,
    y: 10,
    width: 0.1,
    height: 0.1
}

//inicializacion de componentes
const canvas = new Canvas(
    document.getElementById("canvas1"),
    900,
    600,
    cellSize
)
const topBar = new OptionBar(
    canvas.canvasContext,
    canvas.width,
    cellSize * 2
)

//mouse listener : move, leave
let canvasPosition = canvas.canvas.getBoundingClientRect();

canvas.canvas.addEventListener("mousemove", (evt) => {
    mouse.x = evt.x - canvasPosition.left;
    mouse.y = evt.y - canvasPosition.top;
});

canvas.canvas.addEventListener("mouseleave",() => {
    mouse.x = undefined;
    mouse.y = undefined;
});

//grilla del canvas
createGrid = () => {
    //filas
    for(let y = topBar.height; y < canvas.height; y += cellSize ){
        //columnas
        for (let x = 0; x < canvas.width; x += cellSize) {
            gameGrid.push(new CanvasCell(
                canvas.canvasContext,
                x,
                y,
                cellSize
            ));
        }
    }
}
createGrid();
handleGameGrid = () => gameGrid.forEach( grid => grid.draw() )

//mouse listener : click
canvas.canvas.addEventListener("click", () => {
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    if (gridPositionY < cellSize) return;
    let towerCost = 100;
    if (resourcesNumber >= towerCost) {
        //crea la torre
        towers.push( new Tower(
            canvas.canvasContext,
            gridPositionX,
            gridPositionY,
            cellSize)
        );

        resourcesNumber -= towerCost;
    }
});
handleTowers = () => towers.forEach( tower => tower.draw() )

//animacion por frames
animate = () => {
    canvas.canvasContext.clearRect(0,0,canvas.canvas.width,canvas.canvas.height); //limpia el canvas
    topBar.draw(); //barra de opciones
    handleGameGrid(); //dibuja grilla
    handleTowers(); //dibuja torres
    requestAnimationFrame(this.animate); //recursividad
}
animate();


//projectiles

//defenders

//enemies

//resources

//utilities

