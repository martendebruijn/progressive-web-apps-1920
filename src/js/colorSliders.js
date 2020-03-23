const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

function getSliderValue() {
  const redValue = red.value;
  const greenValue = green.value;
  const blueValue = blue.value;
  return { r: redValue, g: greenValue, b: blueValue };
}

function changeSliderValue(sliderEl) {
  sliderEl.oninput = function input() {
    const result = document.querySelector('.resultColor');
    const redValue = getSliderValue().r;
    const greenValue = getSliderValue().g;
    const blueValue = getSliderValue().b;

    result.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };
}

function changeAllSliderValues() {
  this.changeSliderValue(red);
  this.changeSliderValue(green);
  this.changeSliderValue(blue);
}

changeAllSliderValues();
