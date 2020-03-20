# 🎓 Progressive Web Apps 👨🏻‍💻 Marten de Bruijn

## Table of Contents

- [Beschrijving](#Beschrijving)
- [Eerste week](#Eerste-week)
- [API](#Api)
- [Sources](#Sources)
- [Feature Wishlist](#Feature-Wishlist)
- [To Do](#To-Do)

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
npm i express --save
npm i nodemon --save-dev
npm i ejs --save
npm i node-fetch --save
```

```
npm start
<!-- app wil start on localhost:3000 -->
```

```
npm dev
<!-- app wil start in development modus on localhost:3000 -->
```

## API

## Sources

1. [Server side rendering example - Decrek - Github](https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/server.js)
1. [Progressive Web Apps - Marjolein Aardewijn - Github](https://github.com/MarjoleinAardewijn/progressive-web-apps-1920/blob/master/docs/server.js)
1. [Progressive Web Apps - Simone Zeijl - Github](https://github.com/Zeijls/performance-matters-1819/blob/master/app.js)
1. [How can I load my CSS using Express - Reddit](https://www.reddit.com/r/webdev/comments/89gmg8/how_can_i_load_my_css_using_express/)
1. [Node.js + Express - Tutorial GET and POST Request - Academind - Youtube](https://www.youtube.com/watch?v=Sb8xyCa2p7A)
1. [EJS](https://www.npmjs.com/package/ejs)
1. [Expressjs Guide](https://expressjs.com/en/guide/routing.html)
1. [MDN Web Docs - Manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
1. [PWA Tutorial for Beginners #3 - The Web App Manifest - The Net Ninja - Youtube](https://www.youtube.com/watch?v=AlEdGOLhuM8)

## Feature Wishlist

## To Do

- [ ] Update readme
- [ ] Make more partials
- [ ] Learn more about tooling
- [ ] Learn more about ejs
