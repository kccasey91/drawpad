function createGrid(input) {
    const grid = document.querySelector('.container');
    let gridCells = input;
    grid.innerHTML = '';

    for(let i = 0; i < (gridCells * gridCells); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flex = `1 0 calc(100% / ${gridCells})`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'red';
        })
        grid.appendChild(cell);
    }
    
}

function userInput(input){
  let value = document.querySelector('.slider-value');
  value.textContent = `${input}`; 

}

function slider(){
  let slider = document.querySelector('.slider');
  let set = document.querySelector('.set-cells');

  slider.addEventListener('input', () => {
      userInput(slider.value);
  })

  set.addEventListener('click', () => {
      createGrid(slider.value);
  })
}

createGrid(16);
slider();
