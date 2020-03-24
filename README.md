# 🎓 Progressive Web Apps 👨🏻‍💻 Marten de Bruijn

## Table of Contents

- [Live Demo](#Live-Demo)
- [To Do](#To-Do)
- [Beschrijving](#Beschrijving)
- [Eerste week](#Eerste-week)
- [API](#Api)
- [Tools Used](#Tools-Used)
- [Sources](#Sources)
- [Feature Wishlist](#Feature-Wishlist)

## Live Demo

[Live Demo](https://pwa-marten-de-bruijn.herokuapp.com/)

## To Do

- [x] Zet API key in .env
- [x] Verander home/kleurkies-menu naar een form met app.post(...)
- [x] Maak icons
- [x] Maak service worker
- [x] Update #Gebruik in README

## Beschrijving

Zet de gemaakte applicatie bij Webapp From Scratch (WAFS) om tot een server side-render i.p.v. client-side.
Documentatie van de webapplictatie van WAFS kan men [hier](https://github.com/martendebruijn/web-app-from-scratch-1920) vinden.

## Eerste week

De eerste week heb ik vanwege ziekte gemist. Hierdoor moest ik redelijk wat inhalen. Dit heb ik vooral gedaan door [het voorbeeld van Decrek](https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/server.js) te volgen, door te kijken naar de code van anderen (i.h.b. [Marjolein Aardewijn](https://github.com/MarjoleinAardewijn/progressive-web-apps-1920/blob/master/docs/server.js) en [Simone Zeijl](https://github.com/Zeijls/performance-matters-1819/blob/master/app.js) ) en vooral te experimenteren met Express.

## Gebruik

```
git clone ...
cd /progressive-web-apps-1920/docs
npm init
```

```
npm start
<!-- app wil start on localhost:3000 -->
```

```
npm dev
<!-- app wil start in development modus on localhost:3000 -->
```

## Heroku

### Update Heroku

```
heroku login
git push heroku master
```

### Set environment variables on Heroku

```
heroku config:set<ENVIRONMENT_VARIABLE>=<VALUE>
```

`heroku config:get` retrieves the environment variable value
`heroku config` will return all the configuration values set for the application.

###### Source

- [Passing Api Key Heroku Node Application - sung.codes](https://sung.codes/blog/2017/09/09/passing-api-key-heroku-node-application/)

## Performance Enhancements

### Skeleton Design / Aspect Ratio

### Service Side Rendering

- ejs

### Minifying

- CSS
- ES
- img/svg

### Caching

- sw
- static
- dynamic

### Compression

### Service worker

- caching
- fallback

## API

## Tools Used

- [Nodejs](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ejs](https://www.npmjs.com/package/ejs)
- [Heroku](https://www.heroku.com)
- [Gulp](https://gulpjs.com/)
  - [Gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
  - [Gulp autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
  - [Gulp rename](https://www.npmjs.com/package/gulp-rename)
  - [Gulp imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [Terser](https://www.npmjs.com/package/terser) vervangen met [gulp-terser](https://www.npmjs.com/package/gulp-terser)

## Sources

1. [Server side rendering example - Decrek - Github](https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/server.js)
1. [Progressive Web Apps - Marjolein Aardewijn - Github](https://github.com/MarjoleinAardewijn/progressive-web-apps-1920/blob/master/docs/server.js)
1. [Progressive Web Apps - Simone Zeijl - Github](https://github.com/Zeijls/performance-matters-1819/blob/master/app.js)
1. [How can I load my CSS using Express - Reddit](https://www.reddit.com/r/webdev/comments/89gmg8/how_can_i_load_my_css_using_express/)
1. [Node.js + Express - Tutorial GET and POST Request - Academind - Youtube](https://www.youtube.com/watch?v=Sb8xyCa2p7A)
1. [EJS](https://www.npmjs.com/package/ejs)
1. [Expressjs Guide](https://expressjs.com/en/guide/routing.html)
1. [MDN Web Docs - Manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
1. [PWA Tutorial for Beginners - The Net Ninja - Youtube](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
1. [Voorhoede - Say no to image reflow](https://www.voorhoede.nl/nl/blog/say-no-to-image-reflow/)
1. [Gulp Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
1. [Gulp 4 sample file](https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a)
1. [Passing an API Key to Heroku Node Application](https://sung.codes/blog/2017/09/09/passing-api-key-heroku-node-application/)
1. [Optimizing the Critical Rendering Path - developers.google.com](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path)
1. [Remove last character from string in JavaScript](https://tecadmin.net/remove-last-character-from-string-in-javascript/)
1. [Responsive Images - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## Feature Wishlist

- [Gulp eslint](https://www.npmjs.com/package/gulp-eslint)
  <!--
  <img data-src="//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w200" data-srcset="//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w300 300w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w500 500w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w800 800w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w1000 1000w" alt="Willem II en zijn bruid Maria Stuart" sizes="(min-width: 1301px) calc(25vw - 60px), (min-width: 851px) calc(33.33vw - 40px), (min-width: 801px) calc(50vw - 40px), (min-width: 501px) calc(50vw - 20px), 100vw" class="lazy-image" src="//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w200" srcset="//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w300 300w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w500 500w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w800 800w,//lh3.googleusercontent.com/slOCAknKd3RT1QosmVoqaMMMiUTqTv8jLWUFvJSSPbBkuaZrb7YV32dLN2z5eFUMaFEvNNZgcJTkhDRMWOGnome2dg=w1000 1000w">

-->
