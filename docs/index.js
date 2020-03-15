// Require third-party modules
const express = require('express');
const rijksData = require('./modules/api.js');

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
    closestColor: '000111',
  });
});

app.get('/search/:id', (req, res) => {
  res.render('overview', {
    title: 'Overview',
    output: req.params.id,
  });
});

// app.post('/search/submit', (req, res) => {
//   const red = req.body.red;
//   const green = req.body.green;
//   const blue = req.body.blue;
//   res.redirect('/search/' + red + green + blue);
// });

//  app.get('/search', (req, res) => {
//    rijksData.getArtObjects().then(function(rijksData) {
//      res.render('overview', { data: rijksData });
//    });
//  });

// Set up the server
app.listen(port, function() {
  console.log(`Application started on port: ${port}`);
});
