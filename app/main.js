//variables
const gameGrid = [];
const cellSize = 30;
let resourcesNumber = 600;
const towers = [];
const enemies = [];
const enemyPosition = [];
let enemiesInterval = 600;
let gameOver = false;
let frame = 0;
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
handleGameGrid = () => gameGrid.forEach( grid => grid.draw() );

//torres - mouse listener : click
canvas.canvas.addEventListener("click", () => {
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    if (gridPositionY < cellSize) return; //valida posicionamiento fuera de la barra
    for (let i in towers) {
        if( towers[i].x === gridPositionX && towers[i].y === gridPositionY ) //valida celda ocupada
            return;
    }
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
handleTowers = () => towers.forEach( tower => tower.draw() );

//enemigos

handleEnemies = () => {
    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
        if(enemy._x < 0) {
            console.log(enemy._x)
            gameOver = true;
        }
    });

    if (frame % enemiesInterval === 0) {
        let filas = 18;
        let optionBarSpace = 2;
        let verticalPosition = Math.floor(Math.random() * filas + optionBarSpace ) * cellSize;
        enemies.push( new Enemy(
            canvas.canvasContext,
            canvas.width,
            verticalPosition,
            cellSize)
        );
        enemyPosition.push(verticalPosition);

        if ( enemiesInterval > 120 ) { enemiesInterval -= 50; } //controll de velocidad de aparicion de enemigos
    }
};

handleGameStatus = () => {
    if(gameOver) {
        canvas.canvasContext.fillStyle = "black";
        canvas.canvasContext.font = "40px Roboto";
        canvas.canvasContext.fillText("GAME OVER",(canvas.width / 2) - 100,(canvas.height / 2) + 30);
    }
}

//animacion por frames
animate = () => {
    canvas.canvasContext.clearRect(0,0,canvas.canvas.width,canvas.canvas.height); //limpia el canvas
    topBar.draw(); //barra de opciones
    handleGameGrid(); //dibuja grilla
    handleTowers(); //dibuja torres
    handleEnemies(); //dibuja enemigos
    topBar.drawStatus(); //barra de control
    handleGameStatus(); //estado del juego
    frame++;

    //Si un enemigo no traspasa las torres, continua el juego (recursividad)
    if ( !gameOver ) { requestAnimationFrame(this.animate);  }
}
animate();


//projectiles



//enemies

//resources

//utilities

