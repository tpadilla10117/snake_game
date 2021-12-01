import { getInputDirection } from "./Input";

/* How many times the snake moves per second:  */
    export const SNAKE_SPEED = 1;

/* How I represent my Snake, in an X and Y position (here it's middle of screen): */
    const snakeBody = [ { x: 11, y: 11 },
    ];

/* Update loop - updates all of the logic for my game : */
    export function update() {
        const inputDirection = getInputDirection();
        /* console.log("update snake"); */

        for (let i = snakeBody.length - 2; i >= 0; i--) {

        //We take the last element and set it to a new object, shifting the snake:
            snakeBody[i + 1] = { ...snakeBody[i] }; //i + 1 is the last element; snakeBody.length - 2 == 2nd to last element
        }

    //Update the head of the snake:
        snakeBody[0].x += inputDirection.x;
        snakeBody[0].y += inputDirection.y;

    }

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
    export function draw(gameBoard) {
        /* console.log("draw snake"); */

        /* Loop through each portion of the snake - called 'segment' */
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div'); //we create a div
            snakeElement.style.gridRowStart = segment.y; //drawing/setting the X and then Y coordinates of the snake
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake'); //add the 'snake' class
            gameBoard.appendChild(snakeElement);
        })
    }