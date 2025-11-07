const CACHE_NAME = 'cst-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker نصب شد');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker فعال شد');
});
