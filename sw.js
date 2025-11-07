const CACHE_NAME = 'cst-pwa-v1';
const urlsToCache = [
  '/cst/',
  '/cst/index.html',
  '/cst/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
