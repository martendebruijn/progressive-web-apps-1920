const staticCacheName = 'site-static-v3';
const dynamicCache = 'site-dynamic-v2';
const assets = [
  '/',
  '/css/styles.min.css',
  '/img/left-arrow.svg',
  '/fallback',
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
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
        )
    })
  )
});

// fetch events
self.addEventListener('fetch', evt => {
  //   console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCache).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      })
    }).catch(() => caches.match('/fallback'))
  );
});
