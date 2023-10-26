let gridContainer = document.querySelector("#grid-container");
gridContainer.addEventListener("mouseover", setDrawn);

let hoveredCell;

function setDrawn(event){
    hoveredCell = document.querySelector(`#${event.target.id}`);
    hoveredCell.classList.add("drawn");
}

function generateGrid(size){
    if(size > 100){
        alert("You must pick a size no larger than 100.");
        return;
    }
    let totalCells = size * size;
    for(i = 1; i <= totalCells; i++){
        let newCell = document.createElement("div");
        newCell.setAttribute("style", `color: white; border: 1px solid grey; margin: 0px; padding; 0px; box-sizing: border-box; width: ${100/size}%; height: ${100/size}%; flex: 0 0 auto;`);
        newCell.setAttribute("id", `cell-${i}`);
        gridContainer.appendChild(newCell);
    }
}

generateGrid(100);