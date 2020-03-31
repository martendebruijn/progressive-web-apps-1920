const fetch = require('node-fetch');
const keyProperty = '?key=';
const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection';
const amountProperty = '&ps=';
const amount = 10;

async function getOverview(color, key) {
  const colorProperty = '&f.normalized32Colors.hex=%23';
  const url =
    baseUrl +
    keyProperty +
    key +
    amountProperty +
    amount +
    colorProperty +
    color;
  const response = await fetch(url);
  const jsonData = await response.json();
  const overviewData = jsonData.artObjects;
  return overviewData;
}

async function getDetails(id, key) {
  const url = baseUrl + '/' + id + keyProperty + key;

  const response = await fetch(url);
  const jsonData = await response.json();
  const detailData = jsonData.artObject;
  return detailData;
}

module.exports = { getOverview, getDetails };
