// Service Worker para BoccoCitos - Optimización de Caché Agresiva
const CACHE_NAME = 'boccocitos-v2';
const CACHE_DURATION = 86400000; // 24 horas en milisegundos

// Recursos que se cachean inmediatamente por 1 año
const STATIC_CACHE_RESOURCES = [
  '/',
  '/index.html',
  '/style.css',
  '/img/logotrazo.png',
  '/img/pan de yuca.png',
  '/img/maria pipona de maduro.jpg',
  '/img/mini bolon de maduro.png',
  '/img/familia.png',
  '/img/planta.png',
  '/icons/whatsapp.png',
  'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
  'https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-fCZM.woff2'
];

// Recursos que se cachean por 30 días
const DYNAMIC_CACHE_RESOURCES = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalar el service worker con caché agresivo
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Cachear recursos estáticos
        return cache.addAll(STATIC_CACHE_RESOURCES);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Interceptar solicitudes con estrategia Cache First
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Estrategia diferente según el tipo de recurso
  if (url.pathname.startsWith('/img/') || 
      url.pathname.endsWith('.png') || 
      url.pathname.endsWith('.jpg') || 
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.woff2') ||
      url.pathname.endsWith('.css')) {
    
    // Cache First para recursos estáticos (imágenes, fuentes, CSS)
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then(function(response) {
              // Solo cachear respuestas exitosas
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request, responseClone);
                  });
              }
              return response;
            });
        })
    );
  } else {
    // Network First para HTML y contenido dinámico
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseClone);
              });
          }
          return response;
        })
        .catch(function() {
          return caches.match(event.request);
        })
    );
  }
});

// Limpiar cachés antiguos y activar inmediatamente
self.addEventListener('activate', function(event) {
  event.waitUntil(
    Promise.all([
      // Limpiar cachés antiguos
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Tomar control inmediatamente
      self.clients.claim()
    ])
  );
});
