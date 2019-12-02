const etchSketchCanvas = document.querySelector('.etch-a-sketch');
let easDiv;

for (var i = 1; i <= 16; i++) {
  for (var j = 1; j <= 16; j++) {
    easDiv = document.createElement('div');
    easDiv.setAttribute('id', `${i}-${j}`);
    // easDiv.textContent = `${i}-${j}`;
    etchSketchCanvas.appendChild(easDiv);
  }
}

const canvasDivs = document.querySelectorAll(".etch-a-sketch > div");
canvasDivs.forEach((canvasDiv) => {
  canvasDiv.addEventListener('mouseover', (e) => {
    canvasDiv.classList.add('black');
  });
});
