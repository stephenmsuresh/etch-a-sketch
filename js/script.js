const board = document.querySelector("#drawing-board");
let rows = 5;
let columns = 5;

let grid;
for (let i = 1; i <= rows; i++) {
    grid = document.createElement('div');
    for (let j = 1; j <= columns; i++) {
        let section = document.createElement('div');
        grid.appendChild(section);
    }
    board.appendChild(div);
}
