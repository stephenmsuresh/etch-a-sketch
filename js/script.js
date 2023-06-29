//to add:
//letting user know what value they are selecting on the slider to fine tune selection
//letting user know what "pen" color is selected (perhaps by changing button highlight color)

const board = document.querySelector("#drawing-board");

//initial values
const gridSize = document.querySelector('#grid-size');
let color = '#000000';
let sizeDisplay = document.querySelector('#size-display');
sizeDisplay.innerText = gridSize.value;
//create grid with initial value of gridSize
createGrid(gridSize.value);

//slider changes grid size
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
            (['click', 'mouseover']).forEach((evt) => {
                cell.addEventListener(evt, (e) => {
                    colorIn(e, color);
                })
            });
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
    if (e.buttons !== 1 && e.type !== 'click') return;

    if (selectedColor === 'rainbow') {
        let hex = (Math.floor(Math.random() * 16777215).toString(16));
        e.target.style.cssText = `background-color: #${hex}`;
    }
    else {
        e.target.style.cssText = `background-color: ${color}`;
    }
}