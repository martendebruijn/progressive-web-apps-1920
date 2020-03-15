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

/* Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16), //hexadecimal numeric system is used, so a hexadecimal number must be parsed to a decimal number
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rijksColorsToRgb() {
  // De kleurcodes die de rijksmuseum API ondersteund:
  // prettier-ignore
  const rijksmuseumColorsHex = [ '#737C84', '#FBF6E1', '#2F4F4F', '#E0CC91', '#FBF6E1', '#000000', '#B5BFCC',
  '#737C84', '#B35A1F', '#E0CC91', '#F6ECF3', '#B5BFCC', '#F6ECF3', '#981313', '#F49B7A', '#2F4F4F', '#DDA5AA',
  '#E09714', '#367614', '#4019B1', '#4279DB', '#DE4153', '#62AD77', '#8268DC', '#850085', '#981313',
  '#DDA5AA', '#DF4C93', '#FFEB00', '#4279DB'
  ];

  const rijksmuseumRgb = [];
  rijksmuseumColorsHex.map(item => rijksmuseumRgb.push(hexToRgb(item))); //change the hex color codes to rgb color values
  return rijksmuseumRgb;
}

/* Source: https://www.reddit.com/r/learnprogramming/comments/18vjlm/javascript_find_closest_color_in_an_array_of/ */
function colorDifference(r1, g1, b1, r2, g2, b2) {
  let sumOfSquares = 0;

  sumOfSquares += Math.pow(r1 - r2, 2);
  sumOfSquares += Math.pow(g1 - g2, 2);
  sumOfSquares += Math.pow(b1 - b2, 2);

  return Math.sqrt(sumOfSquares); //Hoe kleiner dit getal, hoe dichterbij de kleur.
}

/* Inspired by: https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array */
function sortOnColorDif(prev, curr) {
  const redValue = getSliderValue().r;
  const greenValue = getSliderValue().g;
  const blueValue = getSliderValue().b;
  // prettier-ignore
  return colorDifference(redValue, greenValue, blueValue, curr.r, curr.g, curr.b) //calculate the color difference between the values of the sliders and the current color values
<
 colorDifference(redValue, greenValue, blueValue, prev.r, prev.g, prev.b) //calculate the color difference between the values of the sliders and the previous values
  ? curr : prev;
}
function getClosestColor() {
  const rijksRgb = rijksColorsToRgb();
  const closest = rijksRgb.reduce(sortOnColorDif);
  return closest;
}

/* Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb */
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex.toUpperCase(); //Rijksmuseum API accepteert alleen hoofdletters (+ cijfers)
}

function fullHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
}

function closestOnSearch() {
  const searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', function(e) {
    const closestColor = getClosestColor();
    const _color = fullHex(closestColor.r, closestColor.g, closestColor.b);
    console.log(_color);
    window.location.href = `http://localhost:3000/search/${_color}`; //easy fix / niet de meest flexibele, moet ik later nog even naar kijken
  });
}

changeAllSliders();
closestOnSearch();
