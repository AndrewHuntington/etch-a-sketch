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
  setColor();
}

// there are 3 modes
// 1: squares start white, increase in blackness 10% every mouseover
// 2: squares start white, turn a random color every mouseover
// 3: squares start grey, turn black on mouseover
function setColor() {
  // changes the boxes' color when moused over
  const canvasDivs = document.querySelectorAll(".etch-a-sketch > div");
  canvasDivs.forEach((canvasDiv) => {
    // uncomment variable if using mode 1
    let shade = 0;
    canvasDiv.addEventListener('mouseover', () => {
      // uncomment if using mode 1
      canvasDiv.style.backgroundColor = `rgba(0,0,0,${shade += 0.1})`;

      // uncomment if using mode 2
      // canvasDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

      // uncomment if using mode 3
      // canvasDiv.style.backgroundColor = 'rgb(0, 0, 0)';
    });
  });
}


const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
  let result = window.confirm('Clear the canvas?');
  if (result) {
    setNewGrid();
  } else {
    return;
  }
});

createGrid(16, 16);
setColor();
