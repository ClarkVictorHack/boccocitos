// Service Worker Minimalista para BoccoCitos - Optimizado para rendimiento
const CACHE_NAME = 'boccocitos-v3';

// Solo recursos críticos en caché
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/img/logotrazo.png',
  '/img/pan de yuca.png',
  'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2'
];

// Instalación rápida
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Estrategia simple: Cache First para recursos estáticos
self.addEventListener('fetch', event => {
  const url = event.request.url;
  
  // Solo cachear recursos estáticos críticos
  if (url.includes('.png') || url.includes('.jpg') || url.includes('.woff2') || url.includes('index.html')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

// Activación y limpieza simple
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(name => name !== CACHE_NAME)
             .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});
