
/* How many times the snake moves per second:  */
export const SNAKE_SPEED = 2;

/* How I represent my Snake, in an X and Y position (here it's middle of screen): */
    const snakeBody = [ { x: 11, y: 11 },
        {x: 10, y:11},
        {x:12, y:11},
    
    ];

/* Update loop - updates all of the logic for your game : */
    export function update() {
        /* console.log("update snake"); */

        for (let i = snakeBody.length - 2; i >=0; i--) {
            //We take the last element and set it to a new object, shifting the snake:

            snakeBody[i + 1] = { ...snakeBody[i] }; //i + 1 is the last element; snakeBody.length - 2 == 2nd to last element
        }

        snakeBody[0].x += 1; //shift the snake over by 1
        snakeBody[0].y += 0;

    }

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
    export function draw(gameBoard) {
        /* console.log("draw snake"); */
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div'); //we create a div
            snakeElement.style.gridRowStart = segment.y; //setting the X and then Y coordinate
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake'); //add the 'snake' class
            gameBoard.appendChild(snakeElement);
        })
    }