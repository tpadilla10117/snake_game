
/* How many times the snake moves per second:  */
export const SNAKE_SPEED = 2;

/* How I represent my Snake, in an X and Y position (here it's middle of screen): */
    const snakeBody = [ { x: 11, y: 11 } ];

/* Update loop - updates all of the logic for your game : */
export function update() {
    console.log("update snake");
}

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
export function draw(gameBoard) {
    console.log("draw snake");
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div'); //we create a div
        snakeElement.style.gridRowStart = segment.x; //setting the X and then Y coordinate
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake'); //add the 'snake' class
        gameBoard.appendChild(snakeElement);
    })
}