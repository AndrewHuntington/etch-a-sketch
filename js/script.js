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
  canvasDiv.addEventListener('mouseover', () => {
    canvasDiv.classList.add('black');
  });
});

const btn = document.querySelector("#reset");
btn.addEventListener('click', (e) => {
  let result = window.confirm('Clear the canvas?');
  if (result) {
    canvasDivs.forEach((canvasDiv) => {
      canvasDiv.classList.remove('black');
    });
  } else {
    return;
  }
});
