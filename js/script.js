const etchSketch = document.querySelector('.etch-a-sketch');
let easDiv;

for (var i = 1; i <= 16; i++) {
  for (var j = 1; j <= 16; j++) {
    easDiv = document.createElement('div');
    easDiv.setAttribute('id', `${i}-${j}`);
    easDiv.style.backgroundColor = "blue";
    easDiv.textContent = `${i}-${j}`;
    etchSketch.appendChild(easDiv);
  }
}
