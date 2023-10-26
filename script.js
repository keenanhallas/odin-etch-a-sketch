let gridContainer = document.querySelector("#grid-container");
gridContainer.addEventListener("mouseover", setDrawn);
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
    let size = prompt("Pick a number 100 or less for your canvas grid size:");
    generateGrid(size);
});

let hoveredCell;

function setDrawn(event){
    if(event.target.id === "grid-container"){
        return;
    }

    hoveredCell = document.querySelector(`#${event.target.id}`);
    hoveredCell.classList.add("drawn");
}

function generateGrid(size){
    gridContainer.textContent = "";

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