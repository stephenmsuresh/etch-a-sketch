const board = document.querySelector("#drawing-board");
const slider = document.querySelector('#grid-size');
let color = 'black';
createGrid(slider.value);

slider.addEventListener('change', (e) => {
    createGrid(slider.value);
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
            // cell.setAttribute('draggable','false');
            cell.addEventListener('mouseover', (e) => {
                colorIn(e, color);
            })
            grid.appendChild(cell);
        }
        board.appendChild(grid);
    }
}



function colorIn(e, selectedColor) {
    //if buttons are not pressed
    // console.log(e.buttons)
    if (e.buttons !== 1) return;
    if (selectedColor === 'black') {
        e.target.classList.add('filled-black')
    }
    else if (selectedColor === 'rainbow') {

    }
}