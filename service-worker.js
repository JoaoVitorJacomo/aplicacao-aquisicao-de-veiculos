// NOME DO CACHE
const CACHE_NAME = 'cache-v1';

// LISTA DE ARQUIVOS PARA DEIXAR EM CACHE
const urlsToCache = [
  '/',
  '/index.html',
  '/app-home.html',
  '/app-sobre-page.html',
  '/app-cadastro-page.html',
  '/styles.css',
  '/main.js',
  '/favicon.ico',
  '/assets/*'
];

// EVENTO DE INSTALAR
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// EVENTO DE ATIVAR
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// EVENTO DE FETCH PARA BUILDAR
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});