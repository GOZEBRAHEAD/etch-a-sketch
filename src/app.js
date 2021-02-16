// ============= VARIABLES ============= //
const mainBox = document.querySelector("#main-box");
const btnChangeSize = document.querySelector("#btn-size");

// ============= FUNCTIONS ============= //
// This function verifies the size of the grid to prevent problems.
const verifyNewGridSize = (gridSize) => {

    if (isNaN(gridSize) || gridSize < 2 || gridSize > 64) {
        alert("Please enter only a number between 2 and 64.");
        return false;
    }

    return true;
};

// This function sets the new size to the grid system.
const setGridSize = (gridSize) => mainBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

// This function clear every square inside the grid.
const clearSquares = () => {

    const gridArray = Array.from(mainBox.childNodes);
    gridArray.forEach(actualSquare => {

        mainBox.removeChild(actualSquare);
    });
};

// This function creates every square needed based in the grid size (ex: 4x4).
const createSquares = (gridSize) => {

    let totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {

        const actualSquare = document.createElement("div");

        actualSquare.classList.add("square");

        actualSquare.addEventListener("mouseover", generateRandomColor);

        mainBox.appendChild(actualSquare);
    }
};

// This function generate a random color used when the user goes over the squares with the mouse.
const generateRandomColor = (element) => {

    const R = Math.random() * 256;
    const G = Math.random() * 256;
    const B = Math.random() * 256;

    element.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
};

// ============= EVENTS ============= //
btnChangeSize.addEventListener("click", () => {

    let newSize = prompt("Enter a new square size");
    
    while (!verifyNewGridSize(newSize)) {

        newSize = prompt("Enter a new square size");
    }

    clearSquares();
    
    setGridSize(newSize);

    createSquares(newSize);
});

window.onload = function() {

    setGridSize(2);
    
    createSquares(2);
};