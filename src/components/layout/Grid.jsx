import React from "react";
import './Grid.styles.scss';

function Grid() {

    let lastRenderTime = 0;

    /* Game Loop: */
    function main(currentTime) {
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; /* convert to second from milliseconds */

        window.requestAnimationFrame(main);/* browser, tell me when to I can render my next frame.  I start with requesting a frame to animaye my game, then I get the timestamp back when that frame is going to render*/

        lastRenderTime = currentTime;
        /* console.log("Here is the current time: ", currentTime); */
        console.log(secondsSinceLastRender);
    }

    /* console.log(window.requestAnimationFrame(main)); */

    return (
        <div id="game-board">
            
        </div>
    );
};

export default Grid;
