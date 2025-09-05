// Service Worker para BoccoCitos - Mejora de Rendimiento
const CACHE_NAME = 'boccocitos-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/img/logotrazo.png',
  '/img/pan de yuca.png',
  '/img/maria pipona de maduro.jpg',
  '/img/mini bolon de maduro.png',
  '/img/familia.png',
  'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@400;500&display=swap'
];

// Instalar el service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar las solicitudes de red
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Devolver desde caché si está disponible
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Limpiar cachés antiguos
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
