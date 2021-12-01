let food = { x: 10, y: 1};


/* Update loop - updates all of the logic for my game : */
export function update() {
   

}

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)
   
}