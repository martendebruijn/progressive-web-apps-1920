# 🎓 Progressive Web Apps 👨🏻‍💻 Marten de Bruijn

**❗️Kijk in [de wiki](https://github.com/martendebruijn/progressive-web-apps-1920/wiki) van deze repo voor een uitgebreidere beschrijving**

## Table of Contents

- [Live Demo](#Live-Demo)
- [To Do](#To-Do)
- [Beschrijving](#Beschrijving)
- [Gebruik](#Gebruik)
- [Performance Enhancements ](#Performance-Enhancements)
- [Tools Used](#Tools-Used)
- [Sources](#Sources)
- [Feature Wishlist](#Feature-Wishlist)

## Live Demo

[Live Demo](https://pwa-marten-de-bruijn.herokuapp.com/)

## Beschrijving

Zet de gemaakte applicatie bij Webapp From Scratch (WAFS) om tot een server side-render i.p.v. client-side.
Documentatie van de webapplictatie van WAFS kan men [hier](https://github.com/martendebruijn/web-app-from-scratch-1920) vinden.

## Gebruik

### Clone repo

```
git clone https://github.com/martendebruijn/progressive-web-apps-1920.git
cd /progressive-web-apps-1920
```

### Install npm packages

```
npm init
```

### NPM Scripts

#### Start de app:

```
npm start
```

#### Start de app in development (automaticly refresh) modus:

```
npm run dev
```

#### Build ES, CSS, IMG Files:

```
npm run build
```

#### Build and Compress CSS and ES files:

```
npm run build-and-compress
```

#### Watch ES and CSS files:

```
npm watch
```

## Performance Enhancements

[Wiki](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#performance-enhancements)

1. [Server Side Rendering](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#server-side-rendering)
1. [Eigen icons gebruiken](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#eigen-icons-gebruiken)
1. [Skeleton design / Aspect Ratio](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#skeleton-design--aspect-ratio)
1. [Service Worker](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#service-worker)
1. [Minifying](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#minifying)
1. [Compressie](https://github.com/martendebruijn/progressive-web-apps-1920/wiki/Performance-Enhancements#compressie)

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
  - [Gulp Gzip](https://www.npmjs.com/package/gulp-gzip)
  - [gulp-terser](https://www.npmjs.com/package/gulp-terser)

## Sources

1. [Node.js + Express - Tutorial GET and POST Request - Academind - Youtube](https://www.youtube.com/watch?v=Sb8xyCa2p7A)
1. [EJS](https://www.npmjs.com/package/ejs)
1. [Expressjs Guide](https://expressjs.com/en/guide/routing.html)
1. [MDN Web Docs - Manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
1. [PWA Tutorial for Beginners - The Net Ninja - Youtube](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
1. [Gulp Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
1. [Gulp 4 sample file](https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a)
1. [Can I use?](https://caniuse.com/)

## Feature Wishlist

- [ ] Caching
- [ ] [Gulp eslint](https://www.npmjs.com/package/gulp-eslint)
- [ ] Compression GZIP en Br
- [ ] Code Splitting
- [ ] Font Loading
- [ ] Blocking Font Loading
- [ ] Critical CSS
- [ ] Load Styles Async (- if - needed -)
