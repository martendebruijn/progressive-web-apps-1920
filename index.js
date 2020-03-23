// Require third-party modules
const express = require('express');
const dotenv = require('dotenv');
const colorModule = require('./modules/color.js');
dotenv.config();

// Create new express app in 'app'
const app = express();
const port = process.env.PORT || 3000;
const key = process.env.KEY;

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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
const keyProperty = '?key=';
const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection';
const amountProperty = '&ps=';
const amount = 10;

app.post('/search', async function(req, res) {
  console.log(req.body);
  const redV = req.body.red;
  const greenV = req.body.green;
  const blueV = req.body.blue;
  const hex = colorModule.getVal(redV, greenV, blueV);
  const colorProperty = '&f.normalized32Colors.hex=%23';
  const url =
    baseUrl + keyProperty + key + amountProperty + amount + colorProperty + hex;

  const response = await fetch(url);
  const jsonData = await response.json();
  const overviewData = jsonData.artObjects;
  console.log(overviewData);

  res.render('overview', {
    title: 'Overview',
    style: '../css/styles.css',
    overviewData,
  });
  res.end();
});

// app.get('/search/:id', async function(req, res) {
//   const colorProperty = '&f.normalized32Colors.hex=%23';
//   const color = req.params.id;
//   const url =
//     baseUrl +
//     keyProperty +
//     key +
//     amountProperty +
//     amount +
//     colorProperty +
//     color;

//   const response = await fetch(url);
//   const jsonData = await response.json();
//   const overviewData = jsonData.artObjects;
//   console.log(overviewData);

//   res.render('overview', {
//     title: 'Overview',
//     style: '../css/styles.css',
//     overviewData,
//   });
// });

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
