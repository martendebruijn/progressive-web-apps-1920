// Require third-party modules
const express = require('express');
const dotenv = require('dotenv');
const colorModule = require('./modules/color.js');
const apiModule = require('./modules/api.js');
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
    style: './css/styles.min.css.gz',
  });
});

app.get('/search/:color', async function(req, res) {
  const color = req.params.color;
  const overviewData = await apiModule.getOverview(color, key);
  console.log(overviewData);
  res.render('overview', {
    title: 'Overview',
    style: '../css/styles.min.css.gz',
    overviewData,
    color,
  });
});

app.post('/search', function(req, res) {
  const redV = req.body.red;
  const greenV = req.body.green;
  const blueV = req.body.blue;
  const hex = colorModule.getVal(redV, greenV, blueV);
  res.redirect(`/search/${hex}`);
  res.end();
});

app.get('/c/:color/object/:id', async function(req, res) {
  const color = req.params.color;
  const id = req.params.id;
  const detailData = await apiModule.getDetails(id, key);
  res.render('details', {
    title: 'Detail',
    style: '../../../css/styles.min.css.gz',
    detailData,
    previous: color,
  });
});

app.get('/fallback', (req, res) => {
  res.render('fallback', {
    title: 'Ah oh!',
    style: '../css/styles.min.css.gz',
  });
});

// Set up the server
app.listen(port, function() {
  console.log(`Application started on port: ${port}`);
});
