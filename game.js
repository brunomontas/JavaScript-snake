/** CONSTANTS **/

const CANVAS_BACKGROUND_COLOUR = 'black'
const SNAKE_COLOUR = 'lightgreen';
const gameScreen = document.getElementById('game');

    
// Return a two dimensional drawing context
var ctx = gameScreen.getContext("2d");
//  Select the colour to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
// Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameScreen.width, gameScreen.height);


var State = class State {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.snake = new Snake(Math.floor(gameScreen.width*Math.random()), Math.floor(gameScreen.height*Math.random()));
    }
}


var Snake = class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
        
    }
    draw() {
        ctx.fillStyle = SNAKE_COLOUR;
        // Draw a "filled" rectangle to represent the snake part at the coordinates
        // the part is located
        ctx.fillRect(this.x, this.y, 10, 10);

    }
}

function main() {
    let state = new State();

}

main();





    




