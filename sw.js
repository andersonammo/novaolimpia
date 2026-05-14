const CACHE_NAME = 'dashammo-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/dashammo/',
          '/dashammo/index.html',
          '/dashammo/icon-192.png',
          '/dashammo/icon-512.png'
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
