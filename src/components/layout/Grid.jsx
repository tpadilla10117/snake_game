
//TODO: Implement with React framework
/* import React from "react"; */


import './Grid.styles.scss';
import { SNAKE_SPEED, draw as drawSnake, update as updateSnake } from './Snake';
import { update as updateFood, draw as drawFood } from './Food.js';

function Grid() {

    let lastRenderTime = 0;
    const gameBoard = document.getElementById('game-board');

/* 1) Game Loop: */
    function main(currentTime) {
        window.requestAnimationFrame(main);/* browser, tell me when to I can render my next frame.  I start with requesting a frame to animate my game, then I get the timestamp back when that frame is going to render*/

        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; /* convert to second from milliseconds */

    /* If the seconds from our last render is less than the time between our renders  */
        if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

        /* console.log("Here is the current time: ", currentTime); */
        console.log("Render: ");

        lastRenderTime = currentTime;
        update();
        draw();
    }

    function update() {
        updateSnake();
        updateFood();
    }

/* This functions draws the snake to the gameboard: */
    function draw() {
        gameBoard.innerHTML = ''; //clears the trailing snake pieces
        drawSnake(gameBoard);
        drawFood(gameBoard);
    }

     /* console.log(window.requestAnimationFrame(main)); */
    /* window.requestAnimationFrame(main); */

    return (
        <div id="game-board">
            
        </div>
    );
};

export default Grid;
