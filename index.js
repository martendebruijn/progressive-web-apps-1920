// Require third-party modules
const express = require('express');

// Create new express app in 'app'
const app = express();
const port = 3000;

// const rijksData = require('');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Ontdek het Rijksmuseum bij kleur',
    style: './css/styles.css',
  });
});

const fetch = require('node-fetch');
const key = '?key=JeYMqBl9';
const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection';
const amountProperty = '&ps=';
const amount = 10;

app.get('/search/:id', async function(req, res) {
  const colorProperty = '&f.normalized32Colors.hex=%23';
  const color = req.params.id;
  const url = baseUrl + key + amountProperty + amount + colorProperty + color;

  const response = await fetch(url);
  const jsonData = await response.json();
  const overviewData = jsonData.artObjects;
  console.log(overviewData);

  res.render('overview', {
    title: 'Overview',
    style: '../css/styles.css',
    overviewData,
  });
});

app.get('/object/:id', async function(req, res) {
  const id = req.params.id;
  const url = baseUrl + '/' + id + key;

  const response = await fetch(url);
  const jsonData = await response.json();
  const detailData = jsonData.artObject;
  res.render('details', {
    title: 'Detail',
    style: '../css/styles.css',
    detailData,
  });
});

// Set up the server
app.listen(port, function() {
  console.log(`Application started on port: ${port}`);
});
