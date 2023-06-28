const board = document.querySelector("#drawing-board");
const gridSize = document.querySelector('#grid-size');
let color = '#000000';
let sizeDisplay = document.querySelector('#size-display');
createGrid(gridSize.value);
sizeDisplay.innerText = gridSize.value;

gridSize.addEventListener('change', (e) => {
    createGrid(gridSize.value);
    sizeDisplay.innerText = `${gridSize.value}`;
})

function createGrid(rowsAndCols) {
    board.innerHTML = "";
    let grid;
    for (let i = 0; i < rowsAndCols; i++) {
        grid = document.createElement('div');
        grid.classList.add('row');
        for (let j = 0; j < rowsAndCols; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('draggable', 'false');
            cell.addEventListener('mouseover', (e) => {
                colorIn(e, color);
            })
            grid.appendChild(cell);
        }
        board.appendChild(grid);
    }
}

const colorButton = document.querySelector('#colors');
colorButton.addEventListener('change', (e) => {
    color = document.querySelector('#colors').value;
})

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', (e) => {
    color = '#000000';
    document.querySelector('#colors').value = color;
})

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', (e) => {
    color = 'rainbow';
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
    clearGrid();
})

function clearGrid() {
    let grid = Array.from(document.querySelectorAll('.cell'));
    grid.forEach(element => {
        element.removeAttribute("style");
    })
}


function colorIn(e, selectedColor) {
    //if left click button is not pressed don't do anything
    if (e.buttons !== 1) return;
    //if selected color
    if (selectedColor === 'rainbow') {
        let hex = (Math.floor(Math.random() * 16777215).toString(16));
        e.target.style.cssText = `background-color: #${hex}`;
    }
    else {
        e.target.style.cssText = `background-color: ${color}`;
    }
}