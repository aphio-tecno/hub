self.addEventListener('install', (e) => {
  console.log('TM Hub: Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});