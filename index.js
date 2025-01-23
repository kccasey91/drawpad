let gridCells = 16;

function createGrid(input) {
    const grid = document.querySelector('.container');
    gridCells = input;

    for(let i = 0; i < (gridCells * gridCells); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'red';
        })
        grid.appendChild(cell);
    }
    
}

function userInput(input){
    let value = document.querySelector('.slider-value');
    slider.textContent = `${input}`; 

}

createGrid(gridCells);

function slider(){
    let slider = document.querySelector('.slider');
    let set = document.querySelector('.set-cells');

    userInput(slider.value);

    set.addEventListener('click', () => {
        createGrid(slider.value);
    })
}

slider();
