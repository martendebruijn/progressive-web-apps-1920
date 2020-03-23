const staticCacheName = 'site-static';
const assets = [
  '/',
  '/css/styles.min.css',
  //   'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  //   'https://kit.fontawesome.com/45727ea779.js',
];

// install service worker
self.addEventListener('install', evt => {
  //   console.log('service worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //   console.log('service worker has been activated');
});

// fetch events
self.addEventListener('fetch', evt => {
  //   console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
