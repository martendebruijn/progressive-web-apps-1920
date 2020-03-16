async function getArtObjects() {
  const fetch = require('node-fetch');
  const key = 'JeYMqBl9';
  const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection?key=';
  const amountProperty = '&ps=';
  const amount = 10;
  const colorProperty = '&f.normalized32Colors.hex=%23';
  // const closestColor = color.getClosestColor();
  // const _color = color.fullHex(closestColor.r, closestColor.g, closestColor.b);
  const _color = 'B35A1F';
  const url = baseUrl + key + amountProperty + amount + colorProperty + _color;

  const data = await fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });

  return data;
}

module.exports = { getArtObjects };
