const redEl = document.querySelector('#red');
const greenEl = document.querySelector('#green');
const blueEl = document.querySelector('#blue');

function getSliderValue() {
  return { r: redEl.value, g: greenEl.value, b: blueEl.value };
}

function changeSliderValue(el) {
  el.oninput = function input() {
    const result = document.querySelector('.resultColor');
    const redValue = getSliderValue().r;
    const greenValue = getSliderValue().g;
    const blueValue = getSliderValue().b;
    result.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };
}

function changeAllSliders() {
  changeSliderValue(redEl);
  changeSliderValue(greenEl);
  changeSliderValue(blueEl);
}

changeAllSliders();
closestOnSearch();
