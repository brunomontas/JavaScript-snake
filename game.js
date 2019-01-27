//https://medium.freecodecamp.org/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e

/** CONSTANTS **/
const CANVAS_BACKGROUND_COLOUR = 'black'
const SNAKE_COLOUR = 'lightgreen';
const gameScreen = document.getElementById('game');

    
// Return a two dimensional drawing context
let ctx = gameScreen.getContext("2d");
//  Select the colour to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
// Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameScreen.width, gameScreen.height);


var State = class State {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.snake = new Snake(Math.floor((gameScreen.width - 10)*Math.random()), Math.floor((gameScreen.height - 10)*Math.random()));
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

function start() {
    setInterval(function step() {
        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
        ctx.fillRect(0, 0, gameScreen.width, gameScreen.height);
        let state = new State();
      }, 100);

}

start();







    




