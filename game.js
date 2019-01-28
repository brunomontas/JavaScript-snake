//https://medium.freecodecamp.org/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e

/** CONSTANTS **/
const CANVAS_BACKGROUND_COLOUR = 'black'
const SNAKE_COLOUR = 'lightgreen';
const FOOD_COLOUR = 'red';
const gameScreen = document.getElementById('game');
document.addEventListener("keydown", changeDirection)

// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;

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
        this.snake = new Snake(Math.floor(Math.random()*30)*10,Math.floor(Math.random()*30)*10);
        this.food = new Food(Math.floor(Math.random()*30)*10, Math.floor(Math.random()*30)*10);
    }

    detectColision () {

        if(this.snake.x === this.food.x && this.snake.y === this.food.y){
            this.food.movePosition();
            console.log("eat foot");
        }
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

    moveSnake() {

            ctx.fillStyle = SNAKE_COLOUR;
            this.x = this.x + dx;
            this.y = this.y + dy;
            // Draw a "filled" rectangle to represent the snake part at the coordinates
            // the part is located
            ctx.fillRect(this.x, this.y, 10, 10);  
    }
}

var Food = class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();

    }

    draw() {
        ctx.fillStyle = FOOD_COLOUR;
        // Draw a "filled" rectangle to represent the food at the coordinates
        // the part is located
        ctx.fillRect(this.x, this.y, 10, 10);

    }

    movePosition(){
        this.x = Math.floor(Math.random()*30)*10;
        this.y = Math.floor(Math.random()*30)*10;
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }

function start() {
    let state = new State();
    setInterval(() => {
        state.detectColision();
        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
        ctx.fillRect(0, 0, gameScreen.width, gameScreen.height);
        state.snake.moveSnake();
        state.food.draw();
        

    }, 100);

}

start();