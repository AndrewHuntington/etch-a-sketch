const etchSketchCanvas = document.querySelector('.etch-a-sketch');
let easDiv;

function createGrid(width, height){
  // error handling -- set default values if prompt is blank or 0
  if (!width) {
    width = 16;
  }
  if (!height) {
    height = 16;
  }

  etchSketchCanvas.style.gridTemplateColumns = `repeat(${width}, ${640 / width}px)`;
  etchSketchCanvas.style.gridTemplateRows = `repeat(${height}, ${640 / height}px)`;
  for (var i = 1; i <= height; i++) {
    for (var j = 1; j <= width; j++) {
      easDiv = document.createElement('div');
      easDiv.setAttribute('id', `${i}-${j}`);
      // easDiv.textContent = `${i}-${j}`;
      etchSketchCanvas.appendChild(easDiv);
    }
  }
}

function removeGrid() {
  // removes all divs under .etch-a-sketch
  while (etchSketchCanvas.firstChild) {
    etchSketchCanvas.removeChild(etchSketchCanvas.firstChild);
  }
}

function setNewGrid() {
  removeGrid();
  const width = +prompt("Please enter the number of grids for the width:");
  const height = +prompt("Please enter the number of grids for the height:");
  createGrid(width, height);
  setClassBlack();
}

function setClassBlack() {
  // changes the boxes' color to black when moused over
  const canvasDivs = document.querySelectorAll(".etch-a-sketch > div");
  canvasDivs.forEach((canvasDiv) => {
    canvasDiv.addEventListener('mouseover', () => {
      canvasDiv.classList.add('black');
    });
  });
}

function unsetClassBlack() {
  // resets all boxes back to default color
  const canvasDivs = document.querySelectorAll(".etch-a-sketch > div");
  canvasDivs.forEach((canvasDiv) => {
    canvasDiv.classList.remove('black');
  });
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
  let result = window.confirm('Clear the canvas?');
  if (result) {
    unsetClassBlack();
    setNewGrid();
  } else {
    return;
  }
});

createGrid(16, 16);
setClassBlack();
