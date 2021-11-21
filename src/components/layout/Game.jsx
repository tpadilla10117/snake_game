import React from 'react';

/* Game Loop = a loop that repeats itself on a set interval so you can constantly update your render on a set time  */

function Game() {

/* Game Loop: */
    function main(currentTime) {
        window.requestAnimationFrame(main);/* browser, tell me when to I can render my next frame.  I start with requesting a frame, then */
        console.log("Here is the current time: ", currentTime);
    }

  
    console.log("BOY")

    return (
        <div>
            
        </div>
    )
}

export default Game;
